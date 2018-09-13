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
    	$employee = new User();
    	$employee->name = 'Koffi';
    	$employee->email = 'koffieli@gmail.com';
    	$employee->password = bcrypt('secret');
        $employee->is_active = 1;
        $employee->department_id = 1;
        $employee->agence_id = 1;
        $employee->save();
        $employee->assignRole('admin');
        $employee->save();

        $manager = new User();
        $manager->name = 'Eli';
        $manager->email = 'koffieli@yahoo.fr';
        $manager->password = bcrypt('secret');
        $manager->is_active =1;
        $manager->department_id = 1;
        $manager->agence_id = 1;
        $manager->save();
        $manager->assignRole('super-admin');
        $manager->save();

        $manager = new User();
        $manager->name = 'Simon';
        $manager->email = 'simondejo@gmail.com';
        $manager->password = bcrypt('secret');
        $manager->is_active =1;
        $manager->department_id = 1;
        $manager->agence_id = 1;
        $manager->save();
        $manager->assignRole('super-admin');
        $manager->save();

        $manager = new User();
        $manager->name = 'Kouame Daniel';
        $manager->email = '2kdaniel04@gmail.com';
        $manager->password = bcrypt('secret');
        $manager->is_active =1;
        $manager->department_id = 1;
        $manager->agence_id = 1;
        $manager->save();
        $manager->assignRole('super-admin');
        $manager->save();

    }
}
