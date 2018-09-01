<?php

namespace App\Http\Controllers;

use App\Http\Requests\UsersEditRequest;
use App\Http\Requests\UsersRequest;
use App\Photo;
//use App\Role;
use App\User;
use App\Department;
use Illuminate\Http\Request;
use App\Agence;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

//For spatie
use App\Http\Controllers\Controller;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use DB;
use Hash;

class AdminUsersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     function __construct()
    {
        $this->middleware(['auth', 'isAdmin']); //middleware 
    }

    public function index()
    {
        //
        $users = User::all();
      
        return view('admin.users.index', compact('users'));

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //


        $roles = Role::pluck('name','id')->all();
        $departments = Department::pluck('name','id')->all();
        $agences = Agence::pluck('name','id')->all();
        $permissions = Permission::pluck('name','id')->all();

        return view('admin.users.create', compact('roles','departments','agences','permissions'));

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UsersRequest $request)
    {
        //
        if(trim($request->password) == ''){
            $input = $request->except('password');

        } else{
            $input = $request->all();
            $input['password'] = bcrypt($request->password);
        }

        if($file = $request->file('photo_id')) {
            $name = time() . $file->getClientOriginalName();
            $file->move('images', $name);
            $photo = Photo::create(['file'=>$name]);
            $input['photo_id'] = $photo->id;
        }

        $user = User::create($input);
        
        //spatie roles assigment
        $user->assignRole($request->input('roles'));

        //Spatie permissions 
        $user->givePermissionTo($request->input('permissions'));


        return redirect('/admin/users');

//        return $request->all();

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
        return view('admin.uses.show');
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

        $user = User::findOrFail($id);
        $roles = Role::pluck('name','id')->all();
        $departments = Department::pluck('name','id')->all();
        $userRoles = $user->roles->pluck('name','name')->all();
        $userPermissions = $user->permissions->pluck('name','name')->all();
        return view('admin.users.edit', compact('user','roles','departments','userRoles','userPermissions'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UsersEditRequest $request, $id)
    {
        //
        $user = User::findOrFail($id);
        if(trim($request->password) == ''){

            $input = $request->except('password');

        } else{

            $input = $request->all();
            $input['password'] = bcrypt($request->password);
        }

        if($file = $request->file('photo_id')){
            $name = time() . $file->getClientOriginalName();
            $file->move('images', $name);
            $photo = Photo::create(['file'=>$name]);
            $input['photo_id'] = $photo->id;
        }
        $user->update($input);
        //spatie roles assigment 
        DB::table('model_has_roles')->where('model_id',$id)->delete();
        $user->assignRole($request->input('roles'));

        //spatie permission assignment 
        DB::table('model_has_permission')->where('mode_id',$id)->delete();
        $user->givePermissionTo($request->input('permissions'));
        return redirect('/admin/users');
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
        $user = User::findOrFail($id);
        unlink(public_path() . $user->photo->file);
        $user->delete();
        Session::flash('deleted_user','The user has been deleted');
        return redirect('/admin/users');
    }
}
