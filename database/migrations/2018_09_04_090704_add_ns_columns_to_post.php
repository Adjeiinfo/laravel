<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddNsColumnsToPost extends Migration
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
           $table->string('ns_resultid');
           $table->string('ns_event');
           $table->string('typeclient_id');
           $table->string('ns_phone');
           $table->timestamp('ns_date_transaction');
           $table->string('ns_event_detail');
           $table->string('ns_event_result');
           $table->string('ns_event_montant');
           $table->string('ns_event_place');
           $table->string('nature_transaction_id');
           $table->string('ns_event_observe');
           $table->string('ns_nom_prenom');
           $table->string('typecarte_id');
           $table->string('type_transaction_id');
           $table->string('ns_address_email');
           $table->string('ns_address_postale');
           $table->string('ns_signature');
           $table->timestamp('ns_date_summission');
           $table->timestamp('ns_date_survey');
           $table->string('ns_devices');
           $table->string('ns_latitude');
           $table->string('ns_longitude');
           $table->string('typenotification_id');
           
           $table->string('ns_compte_bancaire');
           $table->timestamp('ns_complete_at');
           $table->timestamp('ns_close_at');
           $table->string('priority_id');

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
           //$table->dropColumn('ns_resultid');
           $table->dropColumn('ns_event');
           $table->dropColumn('typeclient_id');
           $table->dropColumn('ns_phone');
           $table->dropColumn('ns_date_transaction');
           $table->dropColumn('ns_event_detail');
           $table->dropColumn('ns_event_result');
           $table->dropColumn('ns_event_montant');
           $table->dropColumn('ns_event_place');
           $table->dropColumn('nature_transaction_id');
           $table->dropColumn('ns_event_observe');
           $table->dropColumn('ns_nom_prenom');
          // $table->dropColumn('department_id');
           $table->dropColumn('typecarte_id');
           $table->dropColumn('type_transaction_id');
           $table->dropColumn('ns_address_email');
           $table->dropColumn('ns_address_postale');
           $table->dropColumn('ns_signature');
           $table->dropColumn('ns_date_summission');
           $table->dropColumn('ns_date_survey');
           $table->dropColumn('ns_devices');
           $table->dropColumn('ns_latitude');
           $table->dropColumn('ns_longitude');
           $table->dropColumn('typenotification_id');
           $table->dropColumn('ns_compte_bancaire');

         //  $table->dropColumn('ns_complete_at');
          // $table->dropColumn('ns_close_at');
           $table->dropColumn('priority_id');
          
        });
    }
}
