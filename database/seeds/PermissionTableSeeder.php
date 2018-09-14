<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
       $permissions = [
           'role-list',
           'role-create',
           'role-edit',
           'role-delete',

           'reclam-list',
           'reclam-create',
           'reclam-edit',
           'reclam-delete',
           'reclam-close',
           'reclam-reopen',
           'reclam-nonfonde',
           'send-notification',
           'reclam-update-status',
        ];

        foreach ($permissions as $permission) {
             Permission::create(['name' => $permission]);
        }

        // Reset cached roles and permissions
        app()['cache']->forget('spatie.permission.cache');

        // create roles and assign created permissions
        $role = Role::create(['name' => 'admin']);
        $role->givePermissionTo(['reclam-list','role-list', 'reclam-create','reclam-edit','reclam-delete']);

        $role = Role::create(['name' => 'super-admin']);
        $role->givePermissionTo(Permission::all());
    
    }
}
