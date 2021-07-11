<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Category::create([
            'title' => 'Science',
            'slug' => 'science',
            'published' => '1',
        ]);
        Category::create([
            'title' => 'Nature',
            'slug' => 'nature',
            'published' => '1',
        ]);
    }
}
