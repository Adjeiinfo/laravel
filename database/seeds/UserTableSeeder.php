<?php

use Illuminate\Database\Seeder;
use App\User;
use Spatie\Permission\Models\Role;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       	//$role_employee = Role::where('name', 'employee')->first();
    	//$role_manager  = Role::where('name', 'manager')->first();

    	$employee = new User();
    	$employee->name = 'Koffi';
    	$employee->email = 'koffieli@gmail.com';
    	$employee->password = bcrypt('secret');
    	
        $employee->save();

        $employee->assignRole('super-admin');

        $manager = new User();
        $manager->name = 'Eli';
        $manager->email = 'koffieli@yahoo.fr';
        $manager->password = bcrypt('secret');


        $manager->save();
        

        $manager->assignRole('super-admin');

        $manager->save();


    }
}
