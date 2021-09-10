<?php

namespace App\Http\Responses;

use Illuminate\Support\Facades\Auth;
use Laravel\Fortify\Contracts\RegisterResponse as RegisterResponseContract;

class RegisterResponse implements RegisterResponseContract
{

    public function toResponse($request)
    {
        $redirect_path = Auth::user()->is_guest_at != 0 ? '/guest/settings' : '/chatrooms';
        
        return redirect()->intended($redirect_path);
    }

}