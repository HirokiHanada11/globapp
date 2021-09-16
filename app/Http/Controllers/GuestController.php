<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\ChatRoom;
use Inertia\Inertia;

class GuestController extends Controller
{
    public function guestRegister(Request $request, $roomLink){
        $room = ChatRoom::where('link', $roomLink)->first();
        if($room !== null){
            return Auth::user() ? 
                Inertia::render('Chat/GuestSetup/GuestSettings', ['roomId' => $room->id]):
                Inertia::render('Chat/GuestSetup/GuestRegister', ['roomId' => $room->id]);
        }else{
            return Inertia::render('Welcome', [
                'canLogin' => Route::has('login'),
                'canRegister' => Route::has('register'),
                'laravelVersion' => Application::VERSION,
                'phpVersion' => PHP_VERSION,
            ]);
        }
    }

    public function guestSettingsView(Request $request, $roomId = null){
        if($roomId === null){
            $roomId = Auth::user()->is_guest_at;
            if($roomId === 0){
                return Inertia::render('Chat/ChatRoomSelection/ChatRoomsContainer');
            }
        }
        return Inertia::render('Chat/GuestSetup/GuestSettings', ['roomId' => $roomId]);
    }

    public function guestGetRoomInfo(Request $request, $roomId){
        $room = ChatRoom::where('id', $roomId)->first();
        return $room !== null ? ['name' => $room->name, 'description' => $room->description, 'photo' => $room->photo] : null;
    }
}
