<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBlogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('blogs', function (Blueprint $table) {
            // $table->id();
            $table->string('id')->primary()->nullable();

            $table->string('user_id')->references('id')->on('users')->onDelete('set null');
            $table->string('title');
            // $table->text('body');
            $table->mediumText('body');
            $table->string('image')->nullable();
            // name is slug. Unique field
            $table->string('name')->unique()->nullable();
            $table->text('keywords')->nullable();

            $table->unsignedBigInteger('category_id')->nullable()->references('id')->on('blog_categories')->onDelete('set null');
            $table->unsignedBigInteger('language_id')->nullable()->references('id')->on('languages')->onDelete('set null');
            $table->tinyInteger('published')->default(1)->comment('1=published 2=draft');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('blogs');
    }
}
