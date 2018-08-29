@extends('layouts.ha_admin')

@section('content')


@if(Session::has('deleted_user'))
<p class="bg-danger">{{session('deleted_user')}}</p>
@endif


<h1>Users</h1>

<div class="ccol-md-12 col-sm-12 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>Tableau Recaputilatif des Utilisateur<small>Utilisateur</small></h2>
      <ul class="nav navbar-right panel_toolbox">
        <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
        </li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Settings 1</a>
            </li>
            <li><a href="#">Settings 2</a>
            </li>
          </ul>
        </li>
        <li><a class="close-link"><i class="fa fa-close"></i></a>
        </li>
      </ul>
      <div class="clearfix"></div>
    </div>
    <table id="datatable-responsive" class="table table-striped table-bordered dt-responsive nowrap" cellspacing="0" width="100%">
     <thead>
       <tr>
         <th>Id</th>
         <th>Photo</th>
         <th>Name</th>
         <th>Email</th>
         <th>Role</th>
         <th>Department</th>
         <th>Status</th>
         <th>Created</th>
         <th>Updated</th>
       </tr>
     </thead>
     <tbody>
      @if($users)
      @foreach($users as $user)
      <tr>
        <td>{{$user->id}}</td>
        <td> <img height="50" src="{{$user->photo ? $user->photo->file : 'http://placehold.it/400x400'}}" alt="" ></td>
        <td><a href="{{route('admin.users.edit', $user->id)}}">{{$user->name}}</a></td>
        <td>{{$user->email}}</td>
        <td>{{$user->role ? $user->role->name : 'User has no role'}}</td>
        <td>{{$user->department ? $user->department->name : 'User has no department'}}</td>
        <td>{{$user->is_active == 1 ? 'Active' : 'Not Active' }}</td>
        <td>{{$user->created_at->diffForHumans()}}</td>
        <td>{{$user->updated_at->diffForHumans()}}</td>
      </tr>
      @endforeach
      @endif
    </tbody>
  </table>
</div>
</div>


@stop