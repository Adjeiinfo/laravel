<?php

namespace App\Http\Controllers;

use App\Post;
use App\Category;
use App\Comment;
use App\User;

use DB;
use App\Quotation;

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
        $allpost = Post::all();
        $postsCount      = Post::count();
        $categoriesCount = Category::count();
        $commentsCount   = Comment::count();
        $usersCount      = User::count();
        $posts = Post::paginate(2);
        $categories = Category::all();

        $solvedTicket =Post::where('status_id', '3')->count();
        $suspendedTicket = Post::where('status_id', '1')->count();
        $inProgressTicket = Post::where('status_id', '4')->count();
        $percentagesolved = 100* $solvedTicket / $postsCount;

        //Collection for trend
  /*      $topclaimcollection = [];
        $categories_all = Category::all();
        $categories_share = [];
        foreach ($categories_all as $cat) {
            $topclaimcollection[$cat->name] = $cat->posts()->count();
        }

*/

        $topclaimcollection =  DB::table('posts')
                 ->select('category_id', DB::raw('count(*) as count'))
                 ->groupBy('category_id')
                 ->get();
                
        //return $topclaimcollection;
        $topclaimcollection->reverse();

        $top5AgenceCollection = [];
        $lag5AgenceCollection = [];
      



        //donuts 
        $solvedByCategoryCollection = [];
        $claimByCategoryCollection = [];


       // return view('/front/home',compact('posts','categories'));
        return view('fhome',compact('posts','categories','postsCount','categoriesCount','usersCount','solvedTicket','suspendedTicket','percentagesolved','inProgressTicket','topclaimcollection'));
    }

    public function post($slug){


        $post = Post::findBySlugOrFail($slug);
        $categories = Category::all();
        $comments = $post->comments()->whereIsActive(1)->get();
        return view('post', compact('post','comments','categories'));
    }
}
