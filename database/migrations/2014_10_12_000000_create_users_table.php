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
            $table->text('about_me')->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->dateTime('last_login')->nullable();

            $table->enum('is_online', ['true', 'false'])->nullable();
            /**
             * This is from authority
             */
            $table->enum('status', ['allow', 'deny'])->nullable();

            /**
             * 1 = active
             * 2 = deactive
             */
            // $table->enum('is_active', ['1', '2'])->nullable();
            $table->tinyInteger('is_active')->nullable();
            /**
             * 1 = user - Normal user
             * 2 = admin - can checks specific system
             * 3 = super user - can checks, changes all system
             * 4 = 
             */
            // $table->string('user_type')->nullable();
            $table->tinyInteger('user_type')->nullable();
            //$table->enum('user_type', ['user', 'manager', 'admin', 'su_admin']);
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
