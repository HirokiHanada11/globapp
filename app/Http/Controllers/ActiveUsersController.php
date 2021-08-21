<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ActiveUser;
use App\Models\ChatRoomUser;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ActiveUsersController extends Controller
{
    //get all the active users in the room
    public function activeUsers( Request $request, $roomId ){
        return ActiveUser::where('chat_room_id', $roomId)
            ->with('user')
            ->get();
    }

    //count the number of active users from pivot table
    public function countActiveUsers( Request $request, $roomId ){
        return DB::table('chat_room_user')->where('chat_room_id', $roomId)
            ->where('active', 1)
            ->count();
    } 

    //post new subscriber to pivot table
    public function subscribeUser( Request $request, $roomId, $userId ){
        if(ChatRoomUser::where('user_id', $userId)->where('chat_room_id', $roomId)->doesntExist()){
            $newSubscriber = new ChatRoomUser;
            $newSubscriber->user_id = $userId;
            $newSubscriber->chat_room_id = $roomId;
            $newSubscriber->region = $request->region;
            $newSubscriber->active = false;
            $newSubscriber->last_read = null;
            $newSubscriber->save();
            
            return $newSubscriber;
        }else {
            ChatRoomUser::where('user_id', $userId)
                ->where('chat_room_id', $roomId)
                ->update(['region' => $request->region]);
        }
    }

    //post new entry to ActiveUsers model
    public function newActiveUser( Request $request, $roomId ){
        $newActiveUser = new ActiveUser;
        $newActiveUser->chat_room_id = $roomId;
        $newActiveUser->user_id = Auth::id();
        $newActiveUser->region = $request->region;
        $newActiveUser->model_id = $request->modelId;
        $newActiveUser->save();
        
        return $newActiveUser;
    }

    // removes an entry from ActiveUsers model
    public function deactivateUser( Request $request, $roomId ){
        return ActiveUser::where('chat_room_id', $roomId)
            ->where('user_id', Auth::id())
            ->delete();
    }
}
