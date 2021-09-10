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

    public function guestSettingsView(Request $request, $roomId = null){
        if($roomId === null){
            $roomId = Auth::user()->is_guest_at;
        }
        return Inertia::render('Chat/GuestSetup/GuestSettings', ['roomId' => $roomId]);
    }

    public function guestGetRoomInfo(Request $request, $roomId){
        $room = ChatRoom::where('id', $roomId)->first();
        return $room !== null ? ['name' => $room->name, 'description' => $room->description, 'photo' => $room->photo] : null;
    }
}
