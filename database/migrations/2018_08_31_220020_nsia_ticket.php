<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class NsiaTicket extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('nsia_ticket', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ns_resultid');
            $table->string('ns_event');
            $table->string('ns_user_type');
            $table->string('ns_phone');
            $table->timestamp('ns_date_transaction');
            $table->string('ns_reclam_objet');
            $table->string('ns_event_detail');
            $table->string('ns_event_result');
            $table->string('ns_event_montant');
            $table->string('ns_event_place');
            $table->string('ns_event_nature');
            $table->string('ns_nom_prenom'); 
            $table->string('ns_carte_type');
            $table->string('ns_transaction_type');
            $table->string('ns_address_email');
            $table->string('ns_address_postale');
            $table->string('ns_signature');
            $table->timestamp('ns_date_summission');
            $table->timestamp('ns_date_survey');
            $table->string('ns_devices');
            $table->string('ns_latitude');
            $table->string('ns_longitude');
            $table->string('ns_notification_type');
            $table->string('ns_agence');
            $table->string('ns_compte_bancaire');
            $table->timestamps();
            $table->timestamp('ns_complete_at');
            $table->timestamp('ns_close_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('nsia_ticket');
    }
}
