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
            'region' => 'World',
            'description' => 'For general use',
            'photo' => '/storage/useruploads/globe.png'
        ]);
        DB::table('chat_rooms')->insert([
            'name' => 'Tech Talk',
            'region' => 'Japan',
            'description' => 'For tech talk',
            'photo' => '/storage/useruploads/tech-rings.png'
        ]);
    }
}
