<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            // $table->id();
            $table->string('id')->primary()->nullable();
            // For firebase
            $table->string('device_token')->nullable();
            //
            $table->string('name');
            $table->string('username')->unique();
            $table->string('email')->unique();
            $table->string('phone')->nullable();
            $table->string('image')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');

            $table->enum('is_online', ['true', 'false'])->nullable();
            $table->enum('status', ['allow', 'deny'])->nullable();
            $table->string('user_type')->nullable();
            //$table->enum('user_type', ['user', 'student', 'teacher', 'manager', 'admin', 'su_admin']);
            $table->text('api_token')->nullable()->default(null);
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
