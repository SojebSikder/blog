<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['index', 'store', 'update', 'destroy']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $favorite = Favorite::with('blogs', 'user')
            ->where('user_id', auth("api")->user()->id)
            ->orderBy('created_at', 'DESC')
            ->get();
        return response()->json(['data' => $favorite], 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (!auth("api")->user()) {
            return response()->json(['message' => 'Unauthorize'], 500);
        }



        if (Favorite::where('blog_id', '=', $request->input('blog_id'))
            ->where('user_id', '=', auth("api")->user()->id)->exists()
        ) {


            $user_id = auth("api")->user()->id;
            $user = Favorite::where('blog_id', $request->input('blog_id'))->first();

            if ($user_id == $user->user_id) {
                $favorite = Favorite::where('blog_id', $request->input('blog_id'));
                $favorite->delete();
                return response()->json([
                    'success' => true,
                    'message' => 'Deleted successfully'
                ], 200);
            } else {
                return response()->json([
                    'success' => false,
                    "message" => "you're not able to proceed :("
                ], 200);
            }




            // return $this->destroy($request->input('blog_id'));
        } else {
            $favorite = new Favorite();
            $favorite->user_id = auth("api")->user()->id;
            $favorite->blog_id = $request->input('blog_id');
            $favorite->save();

            return response()->json([
                // 'data' => $favorite,
                'success' => true,
                'message' => 'Added to favorite successfully'
            ], 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (!auth("api")->user()) {
            return response()->json(['message' => 'Unauthorize'], 500);
        }

        $favorite = Favorite::where('user_id', $id)->with('blogs')->get();
        return response()->json(['data' => $favorite], 200);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if (!auth("api")->user()) {
            return response()->json(['message' => 'Unauthorize'], 500);
        }
        $user_id = auth("api")->user()->id;
        $user = Favorite::where('id', $id)->first();

        if ($user_id == $user->user_id) {
            $favorite = Favorite::where('id', $id);
            $favorite->delete();
            return response()->json([
                'success' => true,
                'message' => 'Deleted successfully'
            ], 200);
        } else {
            return response()->json([
                'success' => false,
                "message" => "you're not able to proceed :("
            ], 200);
        }
    }
}
