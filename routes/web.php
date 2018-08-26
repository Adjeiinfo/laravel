<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/
use Illuminate\Support\Facades\Mail;

Auth::routes();

Route::get('/logout', 'Auth\LoginController@logout');

// Laravel auth route.
Auth::routes();

Route::get('/', 'HomeController@index')->name('home');

// Users resource route.
Route::resource('admin/users', 'AdminUsersController',['names'=>[

    'index'=>'admin.users.index',
    'create'=>'admin.users.create',
    'store'=>'admin.users.store',
    'edit'=>'admin.users.edit'
]]);


// Roles resource route.
Route::resource('roles', 'RoleController');

// Permissions resource route.
//Route::resource('permissions', 'PermissionController');

// Post resource route.
Route::resource('admin/posts', 'AdminPostsController',['names'=>[
    'index'=>'admin.posts.index',
    'create'=>'admin.posts.create',
    'store'=>'admin.posts.store',
    'edit'=>'admin.posts.edit'
]]);

Route::resource('admin/comments', 'PostCommentsController',['names'=>[
    'index'=>'admin.comments.index',
    'create'=>'admin.comments.create',
    'store'=>'admin.comments.store',
    'edit'=>'admin.comments.edit',
    'show'=>'admin.comments.show'

]]);

Route::resource('admin/comments/replies', 'CommentRepliesController',['names'=>[
    'index'=>'admin.comments.replies.index',
    'create'=>'admin.comments.replies.create',
    'store'=>'admin.comments.replies.store',
    'edit'=>'admin.comments.replies.edit',
    'show'=>'admin.comments.replies.show'

]]);

Route::resource('admin/categories', 'AdminCategoriesController',['names'=>[
    'index'=>'admin.categories.index',
    'create'=>'admin.categories.create',
    'store'=>'admin.categories.store',
    'edit'=>'admin.categories.edit'
]]);
Route::resource('admin/status', 'AdminStatusController',['names'=>[
    'index'=>'admin.status.index',
    'create'=>'admin.status.create',
    'store'=>'admin.status.store',
    'edit'=>'admin.status.edit'
]]);


Route::resource('admin/statut', 'StatutController',['names'=>[
    'index'=>'admin.statut.index',
    'create'=>'admin.statut.create',
    'store'=>'admin.statut.store',
    'edit'=>'admin.statut.edit'
]]);


Route::resource('admin/departments', 'AdminDepartmentsController',['names'=>[
    'index'=>'admin.departments.index',
    'create'=>'admin.departments.create',
    'store'=>'admin.departments.store',
    'edit'=>'admin.departments.edit'
]]);
Route::resource('admin/media', 'AdminMediasController',['names'=>[

    'index'=>'admin.media.index',
    'create'=>'admin.media.create',
    'store'=>'admin.media.store',
    'edit'=>'admin.media.edit'

]]);

Route::get('/post/{id}', ['as'=>'home.post', 'uses'=>'HomeController@post']);


Route::get('/emails', function(){

    $data = [
        'title' => 'this is mail from laravel',
        'content'=> 'try this first'
    ];

    Mail::send('emails.test',$data, function($message){
        $message->to('koffieli@gmail.com','Koffi')->subject('doing good?');
    });
});