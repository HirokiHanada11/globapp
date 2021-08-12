<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ActiveUser;
use App\Models\ChatMessage;
use App\Events\NewChatMessage;

class DemoController extends Controller
{
    // Creates new demo active user
    public function newDemoActiveUser( Request $request, $roomId ){
        $newDemoActiveUser = new ActiveUser;
        $newDemoActiveUser->chat_room_id = $roomId;
        $newDemoActiveUser->user_id = $request->userId;
        $newDemoActiveUser->region = $request->region;
        $newDemoActiveUser->model_id = 1;
        $newDemoActiveUser->save();
        
        return $newDemoActiveUser;
    }

    //deactivate demo users
    public function deactivateDemoUser( Request $request, $roomId ){
        return ActiveUser::where('chat_room_id', $roomId)
            ->where('model_id', 1)
            ->delete();
    }

    //Demo message
    public function newDemoMessage( Request $request, $roomId ){
        $newDemoMessage = new ChatMessage;
        $newDemoMessage->user_id = $request->demoUserId;
        $newDemoMessage->chat_room_id = $roomId;
        $newDemoMessage->message = $request->message;
        $newDemoMessage->link = $request->link;
        $newDemoMessage->article = $request->article;
        $newDemoMessage->replying_to = $request->replyTo;
        $newDemoMessage->save();

        // broadcast(new NewChatMessage( $newDemoMessage ))->toOthers();

        return $newDemoMessage;
    }
}
