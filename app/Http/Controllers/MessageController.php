<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatMessage;
use App\Events\NewChatMessage;
use Illuminate\Support\Facades\Auth;

class MessageController extends Controller
{
    /*Gets paginated message in ChatMessage model */
    public function getPaginatedMessages( Request $request, $roomId, $pagination ){
        $offset = $pagination * 20;
        $limit = 20;
        return ChatMessage::where('chat_room_id', $roomId)
            ->with('user')
            ->latest()
            ->offset($offset)
            ->limit($limit)
            ->get();
    }

    /*Gets the newest message in ChatMessage model */
    public function getNewestMessage( Request $request, $roomId ){
        return ChatMessage::where('chat_room_id', $roomId)
            ->with('user')
            ->latest()
            ->first();
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
