<?php

namespace App\Http\Controllers;

use App\Post;
use App\Category;
use App\Comment;
use App\User;

use Illuminate\Http\Request;


class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
       $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
       
        //return  view('fhome');

        //$request->user()->authorizeRoles(['employee', 'manager']);
        //return view('home');
        $postsCount      = Post::count();
        $categoriesCount = Category::count();
        $commentsCount   = Comment::count();
        $usersCount      = User::count();

        $posts = Post::paginate(2);

        $categories = Category::all();

       // return view('/front/home',compact('posts','categories'));
        return view('fhome',compact('posts','categories','postsCount','categoriesCount','usersCount'));


    }

    public function post($slug){


        $post = Post::findBySlugOrFail($slug);
        $categories = Category::all();
        $comments = $post->comments()->whereIsActive(1)->get();
        return view('post', compact('post','comments','categories'));


    }
}
