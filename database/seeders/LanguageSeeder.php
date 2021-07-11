<?php

namespace Database\Seeders;

use App\Models\Language;
use Illuminate\Database\Seeder;

class LanguageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Language::create([
            'title' => 'BN',
            'published' => '1',
        ]);
        Language::create([
            'title' => 'EN',
            'published' => '1',
        ]);
    }
}
