<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatMessage;
use App\Events\NewChatMessage;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    /*Gets all the message in ChatMessage model */
    public function messages( Request $request, $roomId ){
        return ChatMessage::where('chat_room_id', $roomId)
            ->with('user')
            ->orderBy('created_at', "DESC")
            ->get();
    }

    /* Posts new message to the ChatMessages model and broadcast NewChatMessageEvent */
    public function newMessage( Request $request, $roomId ){
        $newMessage = new ChatMessage;
        $newMessage->user_id = Auth::id();
        $newMessage->chat_room_id = $roomId;
        $newMessage->message = $request->message;
        $newMessage->link = $request->link;
        $newMessage->article = json_encode($request->article);
        $newMessage->replying_to = $request->replyTo;
        $newMessage->save();

        broadcast(new NewChatMessage( $newMessage ))->toOthers();


        return $newMessage;
    }
}
