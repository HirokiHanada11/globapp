<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeGuestColumnNameUsers extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->foreignId('is_guest')->nullable()->change();
            $table->renameColumn('is_guest', 'is_guest_at');           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('users', function (Blueprint $table) {
            $table->boolean('is_guest')->default(false)->after('password')->change();      
            $table->renameColumn('is_guest_at', 'is_guest');       
        });
    }
}
