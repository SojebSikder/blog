<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Language;
use Carbon\Carbon;
use Illuminate\Http\Request;

class LanguageController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api')->only(['store', 'update', 'destroy']);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //
        //
        if ($request->input('limit')) {
            //
            // Uses: app
            // this is using on app
            //
            $result = Language::limit((int)$request->input('limit'))->get();
            return response()->json(['data' => $result], 200);
            //
        } else if ($request->input('convert')) {
            //
            // Uses: app
            // this is using on app for converting id to text
            $result = Language::where('id', $request->input('convert'))->first();
            return response()->json(['data' => $result], 200);
            //
        } else {
            $result = Language::all();
            return response()->json(['data' => $result], 200);
        }
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
        //
        if (auth("api")->user()->user_type != "admin") {
            return response()->json(['message' => 'Unauthorize'], 500);
        }

        $result = new Language();
        $result->title = $request->input('title');
        // set created at time
        $result->created_at = Carbon::now()->toDateTimeString();
        $result->save();

        return response()->json(['data' => $result, 'message' => 'Added Language successfully'], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $result = Language::where('id', $id)->get();
        return response()->json(['data' => $result], 200);
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
        if (auth("api")->user()->user_type != "admin") {
            return response()->json(['message' => 'Unauthorize'], 500);
        }

        $result = Language::where('id', $id)->first();
        $result->title = $request->input('title');

        // set created at time
        $result->updated_at = Carbon::now()->toDateTimeString();
        $result->save();

        return response()->json(['data' => $result, 'message' => 'Language have changed successfully'], 201);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        if (auth("api")->user()->user_type != "admin") {
            return response()->json(['message' => 'Unauthorize'], 500);
        }

        $result = Language::where('id', $id)->first();
        $result->delete();

        return response()->json(['data' => $result, 'message' => 'Deleted successfully'], 201);
    }
}
