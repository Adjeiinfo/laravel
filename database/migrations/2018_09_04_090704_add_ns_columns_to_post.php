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
           $table->string('ns_user_type');
           $table->string('ns_phone');
           $table->timestamp('ns_date_transaction');
           $table->string('ns_event_detail');
           $table->string('ns_event_result');
           $table->string('ns_event_montant');
           $table->string('ns_event_place');
           $table->string('ns_event_nature');
           $table->string('ns_event_observe');
           $table->string('ns_nom_prenom');
           $table->string('ns_reclam_objet');
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

           $table->timestamp('ns_complete_at');
           $table->timestamp('ns_close_at');
           $table->string('ns_priority');
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
           $table->dropColumn('ns_resultid');
           $table->dropColumn('ns_event');
           $table->dropColumn('ns_user_type');
           $table->dropColumn('ns_phone');
           $table->dropColumn('ns_date_transaction');
           $table->dropColumn('ns_event_detail');
           $table->dropColumn('ns_event_result');
           $table->dropColumn('ns_event_montant');
           $table->dropColumn('ns_event_place');
           $table->dropColumn('ns_event_nature');
           $table->dropColumn('ns_event_observe');
           $table->dropColumn('ns_nom_prenom');
           $table->dropColumn('ns_reclam_objet');
           $table->dropColumn('ns_carte_type');
           $table->dropColumn('ns_transaction_type');
           $table->dropColumn('ns_address_email');
           $table->dropColumn('ns_address_postale');
           $table->dropColumn('ns_signature');
           $table->dropColumn('ns_date_summission');
           $table->dropColumn('ns_date_survey');
           $table->dropColumn('ns_devices');
           $table->dropColumn('ns_latitude');
           $table->dropColumn('ns_longitude');
           $table->dropColumn('ns_notification_type');
           $table->dropColumn('ns_agence');
           $table->dropColumn('ns_compte_bancaire');

           $table->dropColumn('ns_complete_at');
           $table->dropColumn('ns_close_at');
           $table->dropColumn('ns_priority');
        });
    }
}
