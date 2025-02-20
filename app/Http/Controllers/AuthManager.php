<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use App\Mail\SendMail;
use App\Models\ShoppingCartDetail;

class AuthManager extends Controller
{
    public function login(Request $request){
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $email = $request->input('email');
        $password = $request->input('password');

        // Kiểm tra email tồn tại trong DB
        $user = User::where('email', $email)->first();
        if (!$user) {
            return response()->json(['error' => true, 'message' => 'Email không tồn tại']);
        }

        // Kiểm tra mật khẩu
        if (!Hash::check($password, $user['Password'])) {
            return response()->json(['error' => true, 'message' => 'Mật khẩu không đúng']);
        }

        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            // Nếu đăng nhập thành công
            $user = Auth::user();
            Session::put('user', $user);

            return response()->json(['error' => false, 'message' => 'Login successful', 'user' => $user]);
        }

        return response()->json(['error' => true, 'message' => 'Đăng nhập không thành công']);
    }





    function registration(Request $request){
        $request->validate([
            'userName' =>'required',
            'password' =>'required',
            'email' => 'required',
            'firstName' =>'required',
            'lastName' =>'required',
        ]);

        $data['UserName'] = $request->userName;
        $data['password'] = Hash::make($request->password);
        $data['email'] = $request->email;
        $data['FirstName'] = $request->firstName;
        $data['LastName'] = $request->lastName;

        $email = $request->input('email');
        $user = User::where('email', $email)->first();

        if (! empty($user)) {
            return response()->json(['error' => true, 'message' => 'Email existed']);
        } else {
            $userName = $request->input('userName');
            $user = User::where('UserName', $userName)->first();
            if (! empty($user)) {
                return response()->json(['error' => true, 'message' => 'userName existed']);
            }
            else {
                $user = User::create($data);
                if ($user) {
                    $cartData['UserID'] = $user->UserID;
                    ShoppingCart::create($cartData);
                    Auth::login($user);
                    $user = Auth::user();
                    Session::put('user', $user);
                    return redirect(route('index'));
                } else {
                    return response()->json(['success' => false, 'error' => 'Registration failed']);
                }
            }
        }
    }

    function forgotPass(){
        return view("user.forgot-password");
    }

    function confirmEmail(Request $request){
        $request->validate([
            'email' => 'required|email',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return back()->withInput()->with('error', 'Không tồn tại người dùng với Email này');
        }

        $confirmationCode = Str::random(6);
        $user->ConfirmCode = $confirmationCode;
        $user->save();

        $mailData = [
            'title' => 'Xác nhận Email',
            'body' => 'Mã xác nhận Email: ',
            'confirmationCode' => $confirmationCode,
            'email' => $request->email,
        ];

        Mail::to($request->email)->send(new SendMail($mailData));

        return view("user.reset-password", compact('mailData'));
    }

    function changePassword(Request $request){
        $user = User::where('email', $request->email)->first();

        if($user->ConfirmCode == $request->confirmCode) {
            if($request->password == $request->cfpassword) {
                $user->password = Hash::make($request->password);
                $user->save();
                return redirect(route('index'));
            }
            return back()->withInput()->with('errorPass', 'Vui lòng nhập 2 mật khẩu giống nhau');
        }
        return back()->withInput()->with('errorCode', 'Sai mã xác nhận');
    }

    function logout(){
        Session::flush();
        Auth::logout();
        return redirect(route('index'));
    }
}
