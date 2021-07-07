<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Lib\FileLib;
use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
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
    public function index()
    {
        // Uses: (web, app)
        // Fetch all blog by id (web, app)
        $result = Blog::with('category')->orderBy('id', 'DESC')->get();
        return response()->json(['data' => $result], 200);
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
        // if (auth("api")->user()->user_type != "admin") {
        //     return response()->json(['message' => 'Unauthorize'], 500);
        // }

        if (!auth("api")->user()) {
            return response()->json(['message' => 'Unauthorize'], 500);
        }

        $result = new Blog();
        $result->id = uniqid(true);
        $result->user_id = auth("api")->user()->id;
        $result->title = $request->Input('title');
        $result->name = $request->Input('name');
        $result->body = html_entity_decode($request->Input('body'));
        $result->keywords = $request->Input('keywords');
        $result->category_id = $request->input('category_id');
        $result->published = $request->input('published');

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = time() . '-' . uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/blog'), $filename);

            $result->image = $filename;
        }
        $result->save();

        return response()->json([
            'success' => true,
            'message' => 'Created successfully'
        ], 201);
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
        $result = Blog::with('category')->where('id', $id)->first();
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
        if (!auth("api")->user()) {
            return response()->json(['message' => 'Unauthorize'], 500);
        }

        $result = Blog::where('id', $id)->first();
        $result->title = $request->Input('title');
        $result->name = $request->Input('name');
        $result->body = html_entity_decode($request->Input('body'));
        $result->keywords = $request->Input('keywords');
        $result->category_id = $request->input('category_id');
        $result->published = $request->input('published');

        if ($request->hasFile('image')) {
            // remove image
            $this->removeImage($result);
            // End remove image

            $file = $request->file('image');
            $filename = time() . '-' . uniqid() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('uploads/blog'), $filename);

            $result->image = $filename;
        }
        $result->save();

        return response()->json([
            'success' => true,
            'message' => 'Updated successfully',
        ], 200);
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
        $result = Blog::where('id', $id)->first();

        // remove image
        FileLib::removeImage($result);
        $result->delete();
        return response()->json(['message' => 'Deleted successfully'], 200);
    }
}
