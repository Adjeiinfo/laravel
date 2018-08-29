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

Auth::routes();

Route::get('/logout', 'Auth\LoginController@logout');

Route::get('/','HomeController@index');

Route::group(['middleware'=>'isAdmin'], function(){

    Route::get('/admin', 'AdminController@index');

    //Route::get('/emails/test/{id}', 'NotificationController@sendmail')->name('ticket_email');

    Route::get('ticket_email/{id}', ['as' => 'ticket_email', 'uses' => 'NotificationController@sendmail']);

    Route::get('/emails/test/{id}', 'NotificationController@sendsms')->name('ticket_sms');
    Route::get('/admin/posts/{id}/destroy', 'AdminPostsController@destroy')->name('ticket_delete');
    Route::get('/admin/posts/{id}/complete', 'AdminPostsController@complete')->name('ticket_close');

    Route::resource('admin/users', 'AdminUsersController',['names'=>[
        'index'=>'admin.users.index',
        'create'=>'admin.users.create',
        'store'=>'admin.users.store',
        'edit'=>'admin.users.edit'
    ]]);

    Route::get('/post/{id}', ['as'=>'home.post', 'uses'=>'HomeController@post']);

    Route::resource('admin/posts', 'AdminPostsController',['names'=>[
        'index'=>'admin.posts.index',
        'create'=>'admin.posts.create',
        'store'=>'admin.posts.store',
        'edit'=>'admin.posts.edit',
        
    ]]);

    Route::resource('admin/categories', 'AdminCategoriesController',['names'=>[
        'index'=>'admin.categories.index',
        'create'=>'admin.categories.create',
        'store'=>'admin.categories.store',
        'edit'=>'admin.categories.edit'
    ]]);

    Route::resource('admin/media', 'AdminMediasController',['names'=>[

        'index'=>'admin.media.index',
        'create'=>'admin.media.create',
        'store'=>'admin.media.store',
        'edit'=>'admin.media.edit'

    ]]);

    Route::delete('admin/delete/media', 'AdminMediasController@deleteMedia');

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

    Route::resource('/roles','RoleController',['names'=>[ 
       'roles','roles.index',
       'create','roles.create',
       'show','roles.show',
       'edit','roles.edit'
   ]]);

});