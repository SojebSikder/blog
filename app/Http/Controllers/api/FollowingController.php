<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class FollowingController extends Controller
{

    /**
     * Toggle Follow/Unfollow a user
     */
    public function toggleFollow(Request $request)
    {

        // receiver id
        $receiver_id = $request->user_id;
        $receiver = User::where("id", $receiver_id)->first();

        // sender id
        $sender_id = User::where("id", auth()->user()->id)->first();

        // Toggle Follow/Unfollow the users
        $sender_id->toggleFollow($receiver);

        return response()->json([
            'success' => true,
            'message' => 'successfull'
        ], 200);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $user = auth()->user();
        $followings = $user->followings->makeHidden('api_token');
        $followers = $user->followers->makeHidden('api_token');
        $data = [
            'id' => auth()->user()->id,
            "followings" =>  $followings,
            "followers" =>  $followers,
        ];

        return response()->json([
            'data' => $data,
        ], 200);
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
    }
}
