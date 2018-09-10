<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
       // 'role_id'=> $faker->numberBetween(1,3),
        'email' => $faker->safeEmail,
        'password' => bcrypt(str_random(10)),
        'remember_token' => str_random(10),
        'agence_id' => $faker->numberBetween(1,50),
        'department_id' => $faker->numberBetween(1,4),
        'photo_id'  =>1,
        'is_active' =>1,
    ];
});


$factory->define(App\Post::class, function (Faker\Generator $faker) {
    return [
        'category_id' => $faker->numberBetween(1,10),
        'photo_id' => 1,
        'title' => $faker->sentence(7,11),
        'body' => $faker->paragraphs(rand(10,15), true),
        'slug'=> $faker->slug(),

        'ns_phone' => $faker->numberBetween(1000000,100000050),
        'ns_date_transaction' =>$faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now'),
        'ns_event_detail' =>$faker->sentence(7,11),
        'ns_event_observe' =>$faker->sentence(7,11),
        'ns_event_result'=>$faker->sentence(7,11),
        'ns_event_montant'=>$faker->numberBetween(10000,10000000),
        'ns_resultid'=>$faker->numberBetween(100,1000),
        'ns_event_place'=>$faker->sentence(1,2),
        'ns_nom_prenom' =>$faker->name,
        'ns_address_email' =>$faker->safeEmail,
        'ns_address_postale'=> $faker->address,
        'ns_signature' =>$faker->sentence(1,2),
        'ns_date_summission' => $faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now'), 
        //'ns_date_survey' => $faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now'),
        'ns_devices'=>$faker->numberBetween(10000,10000000),
        'ns_latitude'=>$faker->numberBetween(10000,10000000),
        'ns_longitude'=>$faker->numberBetween(10000,10000000),
        'ns_compte_bancaire'=>$faker->numberBetween(10000,10000000),
        'complete_at'=> $faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now'),
        'close_at'=> $faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now'),
        'ns_complete_at'=> $faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now'),
        'ns_close_at'=> $faker->dateTimeBetween($startDate = '-1 years', $endDate = 'now'),


        'status_id' =>$faker->numberBetween(1,4),
        'department_id' =>$faker->numberBetween(1,4),
        'agence_id' =>$faker->numberBetween(1,50),
        'typeclient_id' =>$faker->numberBetween(1,3),
        'typecarte_id' =>$faker->numberBetween(1,5),
        'type_transaction_id'=>$faker->numberBetween(1,3),
        'typenotification_id' =>$faker->numberBetween(1,2),
        'priority_id' =>$faker->numberBetween(1,3),
        'department_id' =>$faker->numberBetween(1,3),
        'nature_transaction_id'=>$faker->numberBetween(1,3),
        'user_id'=>$faker->numberBetween(1,10),
    ];
});


$factory->define(App\Role::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->randomElement(['administrator', 'author', 'subscriber']),

    ];
});


$factory->define(App\Category::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->randomElement(['PHP', 'Programming', 'JavaScript', 'Life', 'Travel','Coffee', 'Money', 'Women', 'Men', 'Love' ]),

    ];
});


$factory->define(App\Photo::class, function (Faker\Generator $faker) {
    return [

        'file'=> 'placeholder.jpg'

    ];
});

$factory->define(App\Comment::class, function (Faker\Generator $faker) {
    return [
        'post_id'=> $faker->numberBetween(1,10),
        'is_active'=> 1,
        'author'=> $faker->name,
        'photo'=> 'placeholder.jpg',
        'email' => $faker->safeEmail,
        'body' => $faker->paragraphs(1, true),

    ];
});



$factory->define(App\CommentReply::class, function (Faker\Generator $faker) {
    return [
        'is_active'=> 1,
        'author'=> $faker->name,
        'photo'=> 'placeholder.jpg',
        'email' => $faker->safeEmail,
        'body' => $faker->paragraphs(1, true),

    ];
});



