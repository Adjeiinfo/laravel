<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddOwnerInfoToTicket extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('posts', function (Blueprint $table) {
            //
            $table->string("nom");
            $table->string("user_email");
            $table->string("type_notification");
            $table->string("phone");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('posts', function (Blueprint $table) {
            //
           $table->dropColumn("nom");
           $table->dropColumn("user_email");
           $table->dropColumn("type_notification");
           $table->dropColumn("phone");
       });
    }
}
