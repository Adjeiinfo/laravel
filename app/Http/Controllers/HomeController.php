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

        $solvedByCategoryCollection = Post::join('categories', 'categories.id', '=', 'posts.category_id')
        ->groupBy('categories.id')
        ->where('posts.status_id', '3')
        ->get([
            'categories.id',
            'categories.name',
            DB::raw('count(categories.id) as count'),
            DB::raw(sprintf('(count(*)/(%s) ) as ratio', Post::select(DB::raw('COUNT(*)'))->toSql()))
        ]);

        //return ($solvedByCategoryCollection);
        //Top claim
        $topclaimcollection = Post::join('categories', 'categories.id', '=', 'posts.category_id')
        ->groupBy('categories.id')
        ->get(['categories.id', 'categories.name', DB::raw('count(categories.id) as count')]);
        $topclaimcollection = $topclaimcollection->sortByDesc('count')->values()->all();
        //return ($topclaimcollection);

        //top agences (changer departement par agence ici apres avoir defini comment les agences seront tratees)
        $top5AgenceCollection = Post::join('departments', 'departments.id', '=', 'posts.department_id')
        ->groupBy('departments.id')
        ->where('posts.status_id', '3')
        ->get(['departments.id', 'departments.name', DB::raw('count(departments.id) as count')]);
        $top5AgenceCollection = $top5AgenceCollection->sortByDesc('count')->values()->all();
        
        //lagger agences
        $lag5AgenceCollection =Post::join('departments', 'departments.id', '=', 'posts.department_id')
        ->groupBy('departments.id')
        ->where('posts.status_id', '3')
        ->get(['departments.id', 'departments.name', DB::raw('count(departments.id) as count')]);
        $lag5AgenceCollection = $lag5AgenceCollection->sortBy('count')->values()->all();

        //donuts 

        //solved by category
        $solvedByCategoryCollection = Post::join('categories', 'categories.id', '=', 'posts.category_id')
        ->groupBy('categories.id')
        ->where('posts.status_id', '3')
        ->get(['categories.id', 'categories.name', DB::raw('count(categories.id) as count')]);


       // return view('/front/home',compact('posts','categories'));
        return view('fhome',compact('posts','categories','postsCount','categoriesCount','usersCount','solvedTicket','suspendedTicket','percentagesolved','inProgressTicket','topclaimcollection','top5AgenceCollection','lag5AgenceCollection','solvedByCategoryCollection'));
    }

    public function post($slug){


        $post = Post::findBySlugOrFail($slug);
        $categories = Category::all();
        $comments = $post->comments()->whereIsActive(1)->get();
        return view('post', compact('post','comments','categories'));
    }
}
