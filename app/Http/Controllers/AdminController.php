<?php

namespace App\Http\Controllers;
use App\Post;
use App\Category;
use App\Comment;
use App\User;


use Illuminate\Http\Request;

class AdminController extends Controller
{
    //
    public function index(){
    	//get some dynamic data for the dashboard 

        
    	$postsCount      = Post::count();
    	$categoriesCount = Category::count();
    	$commentsCount   = Comment::count();
    	$usersCount      = User::count();
    	
        //return [$postsCount,$categoriesCount,$commentsCount,$usersCount ];
       // return view('admin/fhome',compact('postsCount','categoriesCount','commentsCount','usersCount'));
        return view('fhome',compact('postsCount','categoriesCount','commentsCount','usersCount'));
    }
}
