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
        $employee->save();
        $employee->assignRole('super-admin');

        $manager = new User();
        $manager->name = 'Eli';
        $manager->email = 'koffieli@yahoo.fr';
        $manager->password = bcrypt('secret');
        $manager->save();
        $manager->assignRole('admin');
        $manager->save();
    }
}
