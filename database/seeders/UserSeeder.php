<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        User::create([
            'id' => '1',
            'name' => 'Sojeb Sikder',
            'username' => 'sojebsikder',
            'email' => 'sojebsikder@gmail.com',
            'phone' => '01833962595',
            'image' => 'logo.png',
            'about_me' => 'Hello, I am Sojeb Sikder',
            'password' => bcrypt('sojeb123'),
        ]);
        User::create([
            'id' => '16156bed723150',
            'name' => 'Sikder Sojeb',
            'username' => 'sikdersojeb',
            'email' => 'sikdersojeb@gmail.com',
            'image' => 'logo.png',
            'about_me' => 'Hello, I am Sikder Sojeb',
            'password' => bcrypt('sikder123'),
        ]);
    }
}
