<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\Data;
use Illuminate\Http\Request;

class DataController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $result = Data::all();
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
        //
        $result = Data::where('id', $id)->delete();
        return response()->json(['message' => 'Deleted successfully'], 201);
    }

    /**
     * Restore deleted data
     */
    public function restore($id)
    {
        //
        $result = Data::withTrashed()->where('id', $id)->first();
        if ($result && $result->trashed()) {
            $result->restore();
            return response()->json(['message' => 'Restored successfully'], 201);
        }
    }
    /**
     * Forcely delete data
     */
    public function forceDestroy($id)
    {
        //
        $result = Data::where('id', $id)->forceDelete();
        return response()->json(['message' => 'Force deleted successfully'], 201);
    }
}
