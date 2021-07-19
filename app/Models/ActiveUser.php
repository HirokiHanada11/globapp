<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActiveUser extends Model
{
    use HasFactory;

    public function room() {
        return $this->hasOne('App\Models\ChatRoom', 'id', 'chat_room_id');
    }

    public function user() {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }

    public function more_user_info() {
        return $this->hasOne('App\Models\MoreUserInfo', 'id', 'user_id');
    }
}
