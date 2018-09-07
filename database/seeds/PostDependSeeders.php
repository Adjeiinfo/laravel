<?php

use Illuminate\Database\Seeder;

class PostDependSeeders extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        //notification 
    	$notifications = [
    		['name'=>"SMS"],
    		['name'=> "E-MAIL"]
    	];
    	DB::table('typenotifications')->insert($notifications);

        //transaction 
    	$transactions = [
    		['name'=>"GAB"],
    		['name'=>"TPE"],
    		['name'=>"INTERNET"]
    	];
    	DB::table('type_transactions')->insert($transactions);

        //client 
    	$clientypes = [
    		['name'=>"Client NSIA BANQUE"],
    		['name'=>"Agent NSIA BANQUE"],
    		['name'=>"Visiteur"]
    	];
    	DB::table('typeclients')->insert($clientypes);

      	//carte 
    	$cartes = [
    		['name'=>"Crystal"],
    		['name'=>"Quartz"],
    		['name'=>"Saphir"],
    		['name'=> "Emeraude"],
    		['name'=> "Classic"],
    		['name'=> "Gold"]
    	];
    	DB::table('typecartes')->insert($cartes);

      	//departement 
    	$department = [
    		['name'=>'Carte'],
    		['name'=>'Compte'],
    		['name'=>'Pret'],
    		['name'=>'Qualite']
    	];
    	DB::table('departments')->insert($department);

      	//priority 
    	$priorities =[
    		['name'=>'low'],
    		['name'=>'normal'],
    		['name'=>'high']
    	];
    	DB::table('priorities')->insert($priorities);

      	//status
    	$status = [
    		['name'=>'Recu'],
    		['name'=>'Traitement en cours'],
    		['name'=> 'Traite'],
    		['name'=>'Suspendu'],
    		['name'=>'Closed']
    	];
    	DB::table('statuses')->insert($status);

        $naturetranactions = [
            ['name'=>'Retrait'],
            ['name'=>'Versement'],
            ['name'=> 'Achat'],
            ['name'=>'Change'],
        ];
        DB::table('nature_transactions')->insert($naturetranactions);
    }

}
