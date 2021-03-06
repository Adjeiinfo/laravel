<?php

namespace App\Http\Controllers;
use App\Category;
use App\Http\Requests\PostsCreateRequest;
use App\Photo;
use App\Post;
use App\Status;
use App\Department;
use Illuminate\Http\Request;
use App\CommentReply;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use DB;
use App\Agence;
use App\typenotification;
use App\type_transaction;
use App\typecarte;
use App\typeclient;
use App\nature_transaction;
use App\Priority;
use App\User;
use App\Notification;
use App\Notifications\NouvelleReclamation;
class AdminPostsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    function __construct()
    {

       $this->middleware('auth');
       $this->middleware(['isAdmin', 'clearance'])->except('index', 'show');
       $this->middleware('permission:reclam-list');
       $this->middleware('permission:reclam-create', ['only' => ['create','store']]);
       $this->middleware('permission:reclam-edit', ['only' => ['edit','update']]);
       $this->middleware('permission:reclam-delete', ['only' => ['destroy']]);
       $this->middleware('permission:reclam-close', ['only' => ['close']]);
   }

   public function index()
   {
    //
    $posts = Post::paginate(10);
    $categories = Category::pluck('name','id')->all();
    $status = Status::pluck('name','id')->all();
    $departments = Department::pluck('name', 'id')->all();
    $agences = Agence::pluck('name', 'id')->all();
    $prirorities = Priority::pluck('name','id')->all();
    return view('admin.posts.index', compact('posts','categories','status','departments'));
}

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
        $categories = Category::pluck('name','id')->all();
        $status = Status::pluck('name','id')->all();
        $departments = Department::pluck('name', 'id')->all();
        $agences = Agence::pluck('name', 'id')->all();


        $prirorities = Priority::pluck('name','id')->all();
        $cartes = typecarte::pluck('name','id')->all();
        $clients = typeclient::pluck('name','id')->all();
        $notifications = typenotification::pluck('name','id')->all();
        $transactions = type_transaction::pluck('name','id')->all();
        $naturetransactions = nature_transaction::pluck('name', 'id')->all();

        return view('admin.posts.create', compact('categories','status','departments','agences',
            'prirorities', 'cartes','clients','notifications','transactions','naturetransactions'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(PostsCreateRequest $request)
    {
        //
        $input = $request->all();
        $user = Auth::user();
        if($file = $request->file('photo_id')){
            $name = time() . $file->getClientOriginalName();
            $file->move('images', $name);
            $photo = Photo::create(['file'=>$name]);
            $input['photo_id'] = $photo->id;
        }

        //set prirority

        $user->posts()->create($input);

        $user->notify(new NouvelleReclamation);

        return redirect('/admin/posts');

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $post = Post::findOrFail($id);
        $categories = Category::pluck('name','id')->all();
        $status = Status::pluck('name','id')->all();
        $departments = Department::pluck('name','id')->all();
        $agences = Agence::pluck('name', 'id')->all();
        $users = User::pluck('name','id')->all();
        $prirorities = Priority::pluck('name','id')->all();
        $cartes = typecarte::pluck('name','id')->all();
        $clients = typeclient::pluck('name','id')->all();
        $notifications = typenotification::pluck('name','id')->all();
        $transactions = type_transaction::pluck('name','id')->all();
        $naturetransactions = nature_transaction::pluck('name', 'id')->all();
        return view('admin.posts.edit', compact('post','categories','status','departments','agences','naturetransactions','notifications','clients','prirorities','transactions','naturetransactions','cartes','users'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $input = $request->all();      
        if($file = $request->file('photo_id')){
            $name = time() . $file->getClientOriginalName();
            $file->move('images', $name);
            $photo = Photo::create(['file'=>$name]);
            $input['photo_id'] = $photo->id;
        }
        //user_id

        $post = Post::findOrFail($id);

        //create and save notification to database
        auth()->user()->notify(new NouvelleReclamation());

        if (self::canupdate($id) == true){
            //return $input;
            //return $post;
            $post->update($input);
            return redirect('/admin/posts')->with("success",'Reclamation mise a jour avec succes');
        }

       

        return redirect()->back()->with("Fail",'Le statut de la reclamation ne peut plus ete modifiee car deja '. $post->status->name);
    }

    public function updatestatus(Request $request, $id)
    {
        //

        $input = $request->all();     

        $post = Post::findOrFail($id);

        if (self::canupdate($id) == true){
        //return $input;
           $post->status_id = $request->status_id;
           $post->save();
           return redirect()->back()->with("success",'Reclamation mise a jour avec succes');
       }
       return redirect()->back()->with("Fail",'Le statut de la reclamation ne peut plus change car deja '. $post->status->name);
   }

   public function reopen(Request $request, $id)
   {
        //
    $input = $request->all();    
    $post = Post::findOrFail($id);

    if (self::canupdate($id) == false){
        $post->status_id = DB::table('statuses')->where('name', 'Recu')->pluck('id')->first();
        $post->ns_complete_at=null;
        $post->ns_close_at = null;
        $post->save();

        return redirect()->back()->with("success",'Reclamation reouverte avec succes');
    }

    return redirect()->back()->with("Fail",'Le statut de la reclamation ne peut plus change car deja '. $post->status->name );
}


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $post = Post::findOrFail($id);
       // unlink(public_path() . $post->photo->file);
        $post->delete();
        return redirect('/admin/posts')->with("reclam_delete",'Reclamation effacee avec succes');
    }

    public function sendmail($id) {

        $name = "Koffi";
        $email = "koffieli@gmail.com";
        $title = "Title";
        $content = "Test";
        Mail::send('admin.posts.sendmail', ['name' => $name, 'email' => $email, 'title' => $title, 'content' => $content], function ($message) {
            $message->to('koffieli@gmail.com')->subject('Subject of the message!');
        });
        redirect("back");
    }

    //post complete 
    public function complete($id)
    {
        $post = Post::findOrFail($id);
        $post->status_id = Status::where('name', 'Complete')->first()->get();
        //ajouter cette colonne a la base de donnnee
        $post->complete_at = Carbon::now();
        $post->save();
    }

    //mark as closed 
    public function close($id)
    {
       $post = Post::findOrFail($id);

       if (self::canupdate($id) == true){
           $post->status_id = DB::table('statuses')->where('name', 'Closed')->value('id');
           $post->close_at = Carbon::now();
           $post->save();
           return redirect()->back()->with("success",'Reclamation fermee avec success');
       }
       return redirect()->back()->with("Fail",'Impossible de fermer car reclamation deja '. $post->status->name);
   }

   public function nonfonde($id)
   {

       $post = Post::findOrFail($id);

       if (self::canupdate($id) == true){
           $post->status_id = DB::table('statuses')->where('name', 'Non-Fonde')->value('id');
           $post->close_at = Carbon::now();
           $post->complete_at = Carbon::now();
           $post->save();
           return redirect()->back()->with("success",'Reclamation marquee Non-Fondee');
       }
       return redirect()->back()->with("Fail",'Impossible de Marquer Non-Fonde car reclamation deja '. $post->status->name);
   }


   private function canupdate($id) {
    $post = Post::findOrFail($id);

    if($post->status->name == "Closed" or $post->status->name=="Non-Fonde"){
        return false;
    }
    return true;
}
}
