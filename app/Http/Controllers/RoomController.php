<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\ChatRoom;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class RoomController extends Controller
{
    // return chat room view
    public function chatroomView( Request $request, $roomId ){
        return Inertia::render('Chat/Room/ChatContainer', [
            'roomId' => $roomId
        ]);
    }

    // gets all the entries in ChatRoom Model
    public function rooms( Request $request ){
        return ChatRoom::with('users')
            ->with('activeUsers')
            ->get();
    }

    // get all the entries in ChatRoom Model that the user is subscribed to
    public function subbedRooms( Request $request ){
        $returnArray = array();
        $user = User::where('id', Auth::id())
            ->with('chatrooms')
            ->first();
        foreach($user->chatrooms as $chatroom){
            $returnArray[] = ChatRoom::where('id', $chatroom->id)
            ->with('users')
            ->with('activeUsers')
            ->first();
        }
        return $returnArray;
    }

    // gets the currentroom from ChatRoom Model
    public function currentRoom( Request $request, $roomId ){
        return ChatRoom::where('id', $roomId)
            ->with('users')
            ->with('activeUsers')
            ->first();
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

    //for retrieving subbed rooms
    public function subbed( Request $request ){
        return User::where('id', Auth::id())->with('chatrooms')->get();
    }

    //for retrieving subbed users
    public function subbedusers( Request $request ){
        $subbedUsers = ChatRoom::where('id', 1)->first();
        $subbedUsers->load('users');
        return $subbedUsers->users;             
    }

}
