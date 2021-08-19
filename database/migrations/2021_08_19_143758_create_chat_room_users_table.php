<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChatRoomUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chat_room_user', function (Blueprint $table) {
            $table->integer('user_id')->unsigned();
            $table->integer('chat_room_id')->unsigned();
            $table->foreign('user_id')
                ->references('id')
                ->on('rooms')
                ->onDelete('cascades');
            $table->foreign('chat_room_id')
                ->references('id')
                ->on('users')
                ->onDelete('cascades');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chat_room_users');
    }
}
