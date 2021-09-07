<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChatRoom extends Model
{
    use HasFactory;

    public function messages() {
        return $this->hasMany('App\Models\Message');
    }

    public function owner() {
        return $this->hasOne(User::class, 'id', 'owner_id');
    }

    public function users() {
        return $this->belongsToMany(User::class)
            ->using(ChatRoomUser::class)
            ->withPivot('active', 'last_read', 'region')
            ->withTimestamps();
    }

    public function activeUsers() {
        return $this->belongsToMany(User::class)
            ->using(ChatRoomUser::class)
            ->withPivot('active', 'last_read', 'region')
            ->withTimestamps()
            ->wherePivot('active', true);
    }

}
