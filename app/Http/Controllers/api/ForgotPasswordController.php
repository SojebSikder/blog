<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Mail\PasswordMail;
use App\Models\Ucode;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller
{
    public function send(Request $request)
    {
        $code = uniqid(true);
        $url = "http://" . $_SERVER["HTTP_HOST"] . "/forgot-password/$code";
        // $objDemo = new \stdClass();
        // $objDemo->demo_one = 'Demo One Value';
        // $objDemo->demo_two = 'Demo Two Value';
        // $objDemo->sender = 'HealthCity';
        // $objDemo->receiver = 'ReceiverUserName';
        if ($request->input('email')) {

            $objDemo = new \stdClass();
            $objDemo->code = $code;
            $objDemo->url = $url;
            // $objDemo->sender = 'Blog';
            $objDemo->sender = env('APP_NAME');

            Mail::to($request->input('email'))->send(new PasswordMail($objDemo));
            // insert ucode to table
            $ucode = new Ucode();
            $ucode->code = $code;
            $ucode->email = $request->input('email');
            $ucode->save();
            //
            return response()->json(['message' => 'Email sent. Please check your inbox']);
        } else {
            return response()->json(['message' => 'Please enter Email']);
        }
    }

    public function recover(Request $request)
    {
        if (Ucode::where('code', $request->input('code'))->exists()) {
            // if (!$request->input('email')) {
            //     return response()->json(['message' => 'Please enter your email']);
            // }
            if ($request->input('password')) {
                // save new password
                $user = User::where('email', Ucode::where('code', $request->input('code'))
                    ->first()->email)->first();
                $user->password = bcrypt($request->input('password'));
                $user->save();
                // delete code from table
                $ucode = Ucode::where('code', $request->input('code'))->first();
                $ucode->delete();

                return response()->json(['message' => 'Password changed successfully']);
            } else {
                return response()->json(['message' => 'Please enter your new password']);
            }
        } else {
            return response()->json(['message' => 'You\'re not able to proceed']);
        }
    }
}
