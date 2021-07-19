<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MoreUserInfo extends Model
{
    use HasFactory;

    public function active_user() {
        return $this->hasOne('App\Models\ActiveUser', 'id', 'user_id');
    }
}
