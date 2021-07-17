<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatRoom;
use App\Models\ChatMessage;
use App\Models\ActiveUser;
use Illuminate\Support\Facades\Auth;
use App\Events\NewChatMessage;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function chatroom( Request $request, $roomId ){
        return Inertia::render('Chat/ChatContainer', [
            'roomId' => $roomId
        ]);
    }

    public function rooms( Request $request ){
        return ChatRoom::all();
    }

    public function currentRoom( Request $request, $roomId ){
        return ChatRoom::where('id', $roomId)->get();
    }

    public function messages( Request $request, $roomId ){
        return ChatMessage::where('chat_room_id', $roomId)
            ->with('user')
            ->orderBy('created_at', "DESC")
            ->get();
    }

    public function activeUsers( Request $request, $roomId ){
        return ActiveUser::where('chat_room_id', $roomId)
            ->with('user')
            ->get();
    }

    public function deactivateUser( Request $request, $roomId, $userId ){
        return ActiveUser::where('chat_room_id', $roomId)
            ->find($userId)
            ->delete();
    }

    public function newMessage( Request $request, $roomId ){
        $newMessage = new ChatMessage;
        $newMessage->user_id = Auth::id();
        $newMessage->chat_room_id = $roomId;
        $newMessage->message = $request->message;
        $newMessage->save();

        broadcast(new NewChatMessage( $newMessage ))->toOthers();

        return $newMessage;
    }

    public function newRoom( Request $request ){ //request includes the object with three elements
        $newRoom = new ChatRoom;
        $newRoom->name = $request->roomName;
        $newRoom->region = $request->roomRegion;
        $newRoom->description = $request->roomDescription;
        $newRoom->save();

        return $newRoom;
    }

    public function newActiveUser( Request $request, $roomId ){
        $newActiveUser = new ActiveUSer;
        $newActiveUser->chat_room_id = $roomId;
        $newActiveUser->user_id = Auth::id();
        $newActiveUser->save();
        
        return $newActiveUser;
    }
}
