<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

// Data
Route::get('/data/{id}/restore', [App\Http\Controllers\api\DataController::class, 'restore']);
Route::get('/data/{id}/delete', [App\Http\Controllers\api\DataController::class, 'forceDestroy']);
Route::resource("data", App\Http\Controllers\api\DataController::class);

Route::post('/login', [App\Http\Controllers\api\UserController::class, 'login']);
Route::post('/register', [App\Http\Controllers\api\UserController::class, 'register']);

Route::resource("user", App\Http\Controllers\api\UserController::class);
Route::get('/logout', [App\Http\Controllers\api\UserController::class, 'logout']);

Route::resource("category", App\Http\Controllers\api\CategoryController::class);
Route::resource("blog", App\Http\Controllers\api\BlogController::class);
