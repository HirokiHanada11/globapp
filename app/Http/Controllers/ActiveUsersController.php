<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ChatRoomUser;
use App\Models\ChatRoom;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class ActiveUsersController extends Controller
{
    //get all active users in the room
    public function allActiveUsers( Request $request, $roomId ){
        return ChatRoom::where('id', $roomId)
            ->with('activeUsers')
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

    //update method to activate user via pivot table
    public function activateUser( Request $request, $roomId, $userId ){
        if(ChatRoomUser::where('user_id', $userId)->where('chat_room_id', $roomId)->doesntExist()){
            $this->subscribeUser( $request, $roomId, $userId );
        } elseif(isset($request->region)){
            ChatRoomUser::where('user_id', $userId)->where('chat_room_id', $roomId)
                ->update(['active' => true, 'region'=> $request->region]);
        }else {
            ChatRoomUser::where('user_id', $userId)->where('chat_room_id', $roomId)
                ->update(['active' => true]);
        }
        return ChatRoomUser::where('user_id', $userId)->where('chat_room_id', $roomId)->with('activeUser')->first();
    }

    //update method to deactivate user via pivot table
    public function deactivateUser( Request $request, $roomId, $userId ){
        if(ChatRoomUser::where('user_id', $userId)->where('chat_room_id', $roomId)->exists()){
            ChatRoomUser::where('user_id', $userId)->where('chat_room_id', $roomId)
                ->update(['active' => false]);
        }
    }
}
