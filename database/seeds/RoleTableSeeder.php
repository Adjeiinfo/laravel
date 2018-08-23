<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //

        $roles = [
           'Chef Departement',
           'Agent Central',
           'Super Chef Agence',
           'Chef Agence ',
           'reclam-list',
           'Qualite',
           'Compagnie',
        ];
        foreach ($roles as $role) {
             Role::create(['name' => $role]);
        }
    }
}
