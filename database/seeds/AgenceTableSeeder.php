<?php

use Illuminate\Database\Seeder;
use App\Agence;

class AgenceTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
    $myagences=[
['name'=>'ABIDJAN SUD (Entreprises)'],
['name'=>'SIEGE '],
['name'=>'NSIA BANQUE YOPOUGON ZI (Entreprises)'],
['name'=>'AGENCE ANOMA '],
['name'=>'AGENCE CNPS'],
['name'=>'AGENCE BLVD DE LA REPUBLIQUE (EX CCIA)'],
['name'=>'AGENCE COMMERCE'],
['name'=>'AGENCE PLATEAU THOMASSET'],
['name'=>'AGENCE CITE DES ARTS'],
['name'=>'AGENCE COCODY DANGA'],
['name'=>'AGENCE LEADER PRICE'],
['name'=>'AGENCE PALM CLUB'],
['name'=>'AGENCE PERLES GRISES'],
['name'=>'AGENCE RIVIERA 2'],
['name'=>'AGENCE RIVIERA 3'],
['name'=>'AGENCE RIVIERA ABATTA'],
['name'=>'AGENCE RIVIERA PALMERAIE'],
['name'=>'AGENCE BONOUMIN '],
['name'=>'AGENCE LATRILLE'],
['name'=>'AGENCE ANGRE DJIBI'],
['name'=>'AGENCE RUE DES JARDINS'],
['name'=>'AGENCE LES VALLONS'],
['name'=>'AGENCE COCODY 8eme TRANCHE'],
['name'=>'AGENCE COCODY Ste MARIE'],
['name'=>'AGENCE BINGERVILLE'],
['name'=>'AGENCE ADJAME MARCHE'],
['name'=>'AGENCE ADJAME MIRADOR'],
['name'=>'AGENCE ADJAME MOSQUEE'],
['name'=>'AGENCE YOPOUGON BEL AIR'],
['name'=>'AGENCE YOPOUGON FICGAYO'],
['name'=>'AGENCE YOPOUGON MAROC'],
['name'=>'AGENCE YOPOUGON SELMER'],
['name'=>'AGENCE TOITS ROUGES'],
['name'=>'AGENCE YOPOUGON ZI'],
['name'=>'AGENCE ATTECOUBE'],
['name'=>'AGENCE ANYAMA'],
['name'=>'AGENCE ABOBO'],
['name'=>'AGENCE ABOBO MAIRIE'],
['name'=>'AGENCE TREICHVILLE'],
['name'=>'AGENCE TREICHVILLE MARCHE'],
['name'=>'AGENCE BELLEVILLE'],
['name'=>'AGENCE BIETRY'],
['name'=>'AGENCE ZONE 4'],
['name'=>'AGENCE MARCORY VGE'],
['name'=>'AGENCE MARCORY REMBLAIS'],
['name'=>'AGENCE MARCORY RESIDENTIEL'],
['name'=>'AGENCE KOUMASSI'],
['name'=>'AGENCE KOUMASSI NORD-EST'],
['name'=>'AGENCE VRIDI'],
['name'=>'AGENCE ABENGOUROU'],
['name'=>'AGENCE ABOISSO'],
['name'=>'AGENCE ADZOPE'],
['name'=>'AGENCE AGBOVILLE'],
['name'=>'AGENCE AGNIBILEKRO'],
['name'=>'AGENCE ASSINIE'],
['name'=>'AGENCE BONOUA'],
['name'=>'AGENCE BONGOUANOU'],
['name'=>'AGENCE BOUAFLE'],
['name'=>'AGENCE BOUAKE'],
['name'=>'AGENCE DABOU'],
['name'=>'AGENCE DALOA'],
['name'=>'AGENCE DAOUKRO'],
['name'=>'AGENCE DIMBOKRO'],
['name'=>'AGENCE DIVO'],
['name'=>'AGENCE DUEKOUE'],
['name'=>'AGENCE FERKESSEDOUGOU'],
['name'=>'AGENCE GAGNOA'],
['name'=>'AGENCE GRAND BASSAM'],
['name'=>'AGENCE GUIGLO'],
['name'=>'AGENCE HIRE'],
['name'=>'AGENCE JACQUEVILLE'],
['name'=>'AGENCE KATIOLA'],
['name'=>'AGENCE KORHOGO'],
['name'=>'AGENCE MAN'],
['name'=>'AGENCE NIABLE'],
['name'=>'AGENCE ODIENNE'],
['name'=>'AGENCE OUME'],
['name'=>'AGENCE SAN PEDRO'],
['name'=>'AGENCE SAN PEDRO BARDOT'],
['name'=>'AGENCE SEGUELA'],
['name'=>'AGENCE SOUBRE'],
['name'=>'AGENCE TIASSALE'],
['name'=>'AGENCE YAMOUSSOUKRO'],
];

    DB::table('agences')->insert($myagences);
    }
}
