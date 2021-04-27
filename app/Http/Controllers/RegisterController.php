<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{

    public function register(Request $request)
    {
        $validated = $request->validate([
            'register_user_name' =>'required|min:4', 
            'register_user_email' => 'required|email',
            'register_user_password' => 'required|min:6',
        ]);

        $user= new User;
        $user->name = $request->register_user_name;
        $user->email = $request->register_user_email;
        $user->Role = 'cliente';
        $user->password = Hash::make($request->register_user_password);
        $user->save(); 
        return ['saved user', $request->register_user_name];
    }
}
