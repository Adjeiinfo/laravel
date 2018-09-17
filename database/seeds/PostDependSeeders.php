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
    		['name'=>"Par SMS"],
    		['name'=> "Par Email"]
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
    		['name'=>"Client BANQUE"],
    		['name'=>"Agent  BANQUE"],
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
    		['name'=>'CARTE BANCAIRE'],
    		['name'=>'COMPTE BANCAIRE'],
    		['name'=>'PRET'],
    		['name'=>'QUALITE']
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
    		['name'=>'Closed'],
            ['name' => 'Non-Fonde']
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
