<?php

namespace App\Http\Responses;

use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{

    public function toResponse($request)
    {
        $redirect_path = Auth::user()->is_admin ? '/dashboard' : '/chatrooms';
        
        return redirect()->intended($redirect_path);
    }

}
