@extends('layouts.ha_admin')

@section('content')
<h1>Reclamations</h1>
<div class="ccol-md-12 col-sm-12 col-xs-12">
  <div class="x_panel">
    <div class="x_title">
      <h2>Tableau Recaputilatif des Reclamations<small></small></h2>
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
         <th>Title</th>
         <th>Status</th>
         <th>Owner</th>
         <th>Category</th>
         <th>Department</th>
        <!-- <th>Post link</th>
         <th>Comments</th>-->
         <th>Soumission</th>
         <th>Modification</th>
         <th style="width: 20%">Action</th>
       </tr>
       </thead>

     <tbody>
      @if($posts)
      @foreach($posts as $post)
      <tr>
        <td>{{$post->id}}</td>
        <td><a href="{{route('admin.posts.edit', $post->id)}}">{{$post->title}}</a></td>
        <td>{{$post->status ? $post->status->name : 'Status Unknown'}}</td>
        <td>{{$post->user->name}}</td>
        <td>{{$post->category ? $post->category->name : 'Uncategorized'}}</td>
        <td>{{$post->department? $post->department->name : 'Department Unknown'}}</td>
       <!-- <td><a href="{{route('home.post', $post->slug)}}">View Post</a></td>
        <td><a href="{{route('admin.comments.show', $post->id)}}">View Comments</a></td>-->
     <td>{{$post->created_at->diffForhumans()}}</td>
        <td>{{$post->updated_at->diffForhumans()}}</td>
        <td>
          <div class="col-xs-4 text-left">
          <a href="{{route('home.post', $post->slug)}}"class = "btn btn-primary btn-xs"><i class="fa fa-eye"></i>  </a>
        </div>
        <div class="col-xs-4 text-center">
          <a href="{{route('admin.posts.edit', $post->id)}}" class="btn btn-warning btn-xs"><i class="fa fa-pencil"></i> </a>
        </div>
        <div class="col-xs-4 text-right">
          <a href="{{route('admin.posts.edit', $post->id)}}" class="btn btn-danger btn-xs "><i class="fa fa-trash fa-danger"></i> </a>
        </div>
        </td>
      </tr>
      @endforeach
      @endif
    </tbody>
  </table>
  <div class="row">
    <div class="col-sm-6 col-sm-offset-5">
      {{$posts->render()}}
    </div>
  </div>
</div>

</div>
@stop