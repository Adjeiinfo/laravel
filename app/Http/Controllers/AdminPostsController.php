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
    $posts = Post::paginate(6);


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
        $agences = Agence::pluck('name','id')->all();
        return view('admin.posts.create', compact('categories','status','departments','agences'));
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
        $user->posts()->create($input);
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
        return view('admin.posts.edit', compact('post','categories','status','departments'));
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
        Auth::user()->posts()->whereId($id)->first()->update($input);

        return redirect('/admin/posts')->with("sucess",'Reclamation mise a jour avec succes');
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
           //dd($request->all());
      /*  $validator = \Validator::make($request->all(), [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required',
            'bodymessage' => 'required']
        );
        if ($validator->fails()) {
            return redirect('contact')->withInput()->withErrors($validator);
        }
        $name = $request->name;
        $email = $request->email;
        $title = $request->subject;
        $content = $request->bodymessage;*/
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
 /*   public function complete($id)
    {
        $post = Post::findOrFail($id);
        $post->status_id = Status::where('name', 'Complete')->first()->get();
        //ajouter cette colonne a la base de donnnee
        $post->complete_at = Carbon::now();
        $post->save();
    }*/

    public function close($id)
    {
        $post = Post::findOrFail($id);
        //$post->status_id = Status::where('name','Close')->first()->get();
         $post->status_id = DB::table('statuses')->where('name', 'Closed')->value('id');
        //$post->status_id = Status::where('name', 'Closed')->get(['id']);
   

        $post->close_at = Carbon::now();
        $post->save();
        return redirect()->back()->with("success",'Reclamation fermee avec success');
    }
}
