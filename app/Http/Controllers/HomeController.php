<?php

namespace App\Http\Controllers;
use App\Post;
use App\Category;
use App\Comment;
use App\User;
use DB;
use App\Quotation;
use Illuminate\Http\Request;
use App\Agence;
use App\typenotification;
use App\type_transaction;
use App\typecarte;
use App\typeclient;
use App\nature_transaction;
use App\Priority;
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

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

      $this->middleware(['isAdmin', 'clearance'])->except('index', 'show');
      $this->middleware('permission:reclam-list');
      $this->middleware('permission:reclam-create', ['only' => ['create','store']]);
      $this->middleware('permission:reclam-edit', ['only' => ['edit','update']]);
      $this->middleware('permission:reclam-delete', ['only' => ['destroy']]);
      $this->middleware('permission:reclam-close', ['only' => ['close']]);
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
        $suspendedTicket = Post::where('status_id', '3')->count();
        $inProgressTicket = Post::where('status_id', '4')->count();
        $percentagesolved = 100* $solvedTicket / $postsCount;

        //Collection for trend
        $topclaimcollection =  Post::join('categories', 'categories.id', '=', 'posts.category_id')
        ->groupBy('categories.id')
        ->get([
            'categories.id',
            'categories.name',
            DB::raw('count(posts.category_id) as count')
        ]);
        $topclaimcollection = $topclaimcollection->sortByDesc('ratio')->values()->all();

        //return ($topclaimcollection);
        $solvedByCategoryCollection = Post::join('categories', 'categories.id', '=', 'posts.category_id')
        ->groupBy('categories.id')
        ->where('posts.status_id', '3')
        ->get([
            'categories.id',
            'categories.name',
            DB::raw('count(posts.category_id) as count'),
            DB::raw(sprintf('(count(*)/(%s) ) as ratio', Post::select(DB::raw('COUNT(*)'))->toSql()))
        ]);
        $solvedByCategoryCollection = $solvedByCategoryCollection->sortByDesc('ratio')->values()->all();

       /* $solvedByCategoryCollection = Post::join('categories', 'categories.id', '=', 'posts.category_id')
        ->selectRaw('*, count(*)')
        ->whereRaw('posts.satus=5)')
        ->groupBy('categories.id')
        ->get();*/

       // return ($solvedByCategoryCollection);
        //Top claim
        $topclaimcollection = Post::join('categories', 'categories.id', '=', 'posts.category_id')
        ->groupBy('categories.id')
        ->get(['categories.id', 'categories.name', DB::raw('count(categories.id) as count')]);
        $topclaimcollection = $topclaimcollection->sortByDesc('count')->values()->all();
        //return ($topclaimcollection);

        //top agences (changer departement par agence ici apres avoir defini comment les agences seront tratees)
        $top5AgenceCollection =Post::join('departments', 'departments.id', '=', 'posts.department_id')
        ->groupBy('departments.id')
        ->where('posts.status_id', '3')
        ->get([
            'departments.id',
            'departments.name',
            DB::raw('count(departments.id) as count'),
            DB::raw(sprintf('(count(*)/(%s) ) as ratio', Post::select(DB::raw('COUNT(*)'))->toSql()))
        ]);
        $top5AgenceCollection = $top5AgenceCollection->sortByDesc('count')->values()->all();
        
        //lagger agences
       /* $lag5AgenceCollection =Post::join('departments', 'departments.id', '=', 'posts.department_id')
        ->groupBy('departments.id')
        ->where('posts.status_id', '3')
        ->get(['departments.id', 'departments.name', DB::raw('count(departments.id) as count')]);
        $lag5AgenceCollection = $lag5AgenceCollection->sortBy('count')->values()->all();
        */

        //lagger with ration 
        $lag5AgenceCollection= Post::join('departments', 'departments.id', '=', 'posts.department_id')
        ->groupBy('departments.id')
        ->where('posts.status_id', '3')
        ->get([
            'departments.id',
            'departments.name',
            DB::raw('count(departments.id) as count'),
            DB::raw(sprintf('(count(*)/(%s) ) as ratio', Post::select(DB::raw('COUNT(*)'))->toSql()))
        ]);
        $lag5AgenceCollection = $lag5AgenceCollection->sortBy('count')->values()->all();

        ///end of lagger ///
        //donuts 

        //solved by category
        $solvedByCategoryCollection = Post::join('categories', 'categories.id', '=', 'posts.category_id')
        ->groupBy('categories.id')
        ->where('posts.status_id', '5')
        ->get(['categories.id', 'categories.name', DB::raw('count(categories.id) as count')]);

        // Total tickets counter per category for google pie chart
        $categories_all = Category::all();
        $categories_share = [];
        foreach ($categories_all as $cat) {
            $categories_share[$cat->name] = $cat->posts()->count();
        }

        //return compact('posts','categories','postsCount','categoriesCount','usersCount','solvedTicket','suspendedTicket','percentagesolved','inProgressTicket','topclaimcollection','top5AgenceCollection','lag5AgenceCollection','solvedByCategoryCollection','allpost','categories_share');
        return view('fhome',compact('posts','categories','postsCount','categoriesCount','usersCount','solvedTicket','suspendedTicket','percentagesolved','inProgressTicket','topclaimcollection','top5AgenceCollection','lag5AgenceCollection','solvedByCategoryCollection','allpost','categories_share','solvedByCategoryCollection'));
    }

    public function post($slug){
        $post = Post::findBySlugOrFail($slug);
        $categories = Category::all();
        $comments = $post->comments()->get();
        $agences = Agence::all();
        $clients = typeclient::all();
        $naturetransaction = nature_transaction::all();
                
        return view('post', compact('post','comments','categories','agences','clients','naturetransaction'));
    }
}
