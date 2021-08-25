<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ChatRoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('chat_rooms')->insert([
            'name' => 'General',
            'topic' => 'Olympics',
            'description' => 'For talking about olympics',
            'photo' => '/storage/useruploads/globe.png'
        ]);
        DB::table('chat_rooms')->insert([
            'name' => 'Tech talk',
            'topic' => 'Tech',
            'description' => 'For talking about olympics',
            'photo' => '/storage/useruploads/tech-rings.png'
        ]);
    }
}
