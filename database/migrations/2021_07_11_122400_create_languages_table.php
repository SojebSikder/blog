<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLanguagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('languages', function (Blueprint $table) {
            $table->id();

            $table->string('title')->nullable();
            $table->string('slug', 355)->nullable();
            $table->string('image')->nullable();
            // $table->enum('status', ['allow', 'deny'])->nullable();
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
        Schema::dropIfExists('languages');
    }
}
