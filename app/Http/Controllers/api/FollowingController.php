<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class FollowingController extends Controller
{
    /**
     * Follow a user
     */
    public function follow(Request $request)
    {
        $user_id = $request->user_id;
        $user = User::where("user_id", $user_id)->first();

        // Follow the user
        $user->follow($user);
    }

    /**
     * Unfollow a user
     */
    public function unfollow(Request $request)
    {
        $user_id = $request->user_id;
        $user = User::where("user_id", $user_id)->first();

        // Unfollow the users
        $user->unfollow($user);
    }

    /**
     * Toggle Follow/Unfollow a user
     */
    public function toggleFollow(Request $request)
    {
        $user_id = $request->user_id;
        $user = User::where("user_id", $user_id)->first();

        // Toggle Follow/Unfollow the users
        $user->toggleFollow($user);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
