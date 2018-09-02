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
         <th style="width: 5%">Photo</th>
         <th>Name</th>
         <th style="width: 20%">Role </th>
         <th style="width: 15%">Permissions</th>
         
         <th style="width: 15%">Agence</th>
         <th>Department</th>
         <th>Status</th>

         <th>Updated</th>
         <th style="width: 10%">Action</th>
       </tr>
     </thead>
     <tbody>
      @if($users)
      @foreach($users as $user)
      <tr>
        <td>{{$user->id}}</td>
        <td> <img height="20" src="{{$user->photo ? $user->photo->file : 'http://placehold.it/400x400'}}" alt="" ></td>

        <td><a href="{{route('admin.users.edit', $user->id)}}">{{$user->name}}</a></td>

        <td>
          @if(!empty($user->roles))
          @foreach($user->roles as $v)
          <label class="label label-success">{{ $v->name }}</label>
          @endforeach
          @endif
        </td>
        <td>
         @if(!empty($user->permissions))
         @foreach($user->permissions as $v)
         <label class="label label-info">{{ $v->name }}</label>
         @endforeach
         @endif
       </td>

       <!--<td>{{$user->role ? $user->role->name : 'User has no role'}}</td>-->


       <td>{{$user->agence ?     $user->agence->name : 'Sans agence'}}</td>

       <td>{{$user->department ? $user->department->name : 'Pas de departement'}}</td>

       <td>{{$user->is_active == 1 ? 'Active' : 'Not Active' }}</td>

       <td>{{$user->updated_at->diffForHumans()}}</td>

       <td>
        <div class="col-xs-4 text-center">
          <a href="{{route('admin.users.edit', $user->id)}}" class="btn btn-warning btn-xs"><i class="fa fa-pencil"></i> </a>
        </div>
        <div class="col-xs-4 text-right">
          <a href="{{route('admin.users.edit', $user->id)}}" class="btn btn-danger btn-xs "><i class="fa fa-trash fa-danger"></i> </a>
        </div>
      </td>
    </tr>
    @endforeach
    @endif
  </tbody>
</table>
</div>
</div>


@stop