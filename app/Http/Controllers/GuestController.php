<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\ChatRoom;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function guestRegister(Request $request, $roomId){
        return Inertia::render('Chat/GuestSetup/GuestRegister', ['roomId' => $roomId]);
    }

    public function guestSettingsView(Request $request){
        return Inertia::render('Chat/GuestSetup/GuestSettings', ['roomId' => Auth::user()->is_guest_at]);
    }

    public function guestGetRoomInfo(Request $request, $roomId){
        $room = ChatRoom::where('id', $roomId)->first();
        return ['name' => $room->name, 'description' => $room->description, 'photo' => $room->photo];
    }
}
