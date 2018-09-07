<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        DB::statement('SET FOREIGN_KEY_CHECKS=0');
        DB::table('users')->truncate();
        DB::table('posts')->truncate();
       // DB::table('roles')->truncate();
        DB::table('categories')->truncate();
        DB::table('photos')->truncate();
        DB::table('comments')->truncate();
        DB::table('comment_replies')->truncate();
        DB::table('agences')->truncate();
        DB::table('departments')->truncate();
        DB::table('priorities')->truncate();
        DB::table('statuses')->truncate();
        DB::table('typecartes')->truncate();
        DB::table('typenotifications')->truncate();
        DB::table('type_transactions')->truncate();
        DB::table('nature_transactions')->truncate();


       // factory(App\Role::class, 3)->create();

         $this->call(RoleTableSeeder::class);

        $this->call(PermissionTableSeeder::class);
        // Role comes before User seeder here.
       
        // User seeder will use the roles above created.
        //$this->call(UserTableSeeder::class);

 

        $this->call(PostDependSeeders::class);

        $this->call(AgenceTableSeeder::class);

        $this->call(UserTableSeeder::class);


        factory(App\Category::class, 10)->create();

        factory(App\Photo::class, 1)->create();



        factory(App\User::class, 10)->create()->each(function($user){
            $user->posts()->save(factory(App\Post::class)->make());
        });

        factory(App\Comment::class, 10)->create()->each(function ($c) {
            $c->replies()->save(factory(App\CommentReply::class)->make());
        });
    }

}
