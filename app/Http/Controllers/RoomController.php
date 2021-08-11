<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ChatRoom;


class RoomController extends Controller
{
    // return chat room view
    public function chatroom( Request $request, $roomId ){
        return Inertia::render('Chat/Room/ChatContainer', [
            'roomId' => $roomId
        ]);
    }

    // gets all the entries in ChatRoom Model
    public function rooms( Request $request ){
        return ChatRoom::all();
    }

    // gets the currentroom from ChatRoom Model
    public function currentRoom( Request $request, $roomId ){
        return ChatRoom::where('id', $roomId)->get();
    }

    // posts new entry to ChatRoom Model
    public function newRoom( Request $request ){ //request includes the object with three elements
        $newRoom = new ChatRoom;
        $newRoom->name = $request->roomName;
        $newRoom->topic = $request->roomTopic;
        $newRoom->description = $request->roomDescription;
        
        if ($request->hasFile('roomPhoto')) {
            $request->validate([
                'roomPhoto' => 'mimes:jpg,jpeg,png'
            ]);
            $filename = $request->roomPhoto->getClientOriginalName();
            $path = $request->roomPhoto->storePubliclyAs('useruploads', $filename, 'public');
            $newRoom->photo = '/storage/'.$path;
        }

        $newRoom->save();

        return $newRoom;
    }
}
