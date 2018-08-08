@extends('layouts.ha_admin')

@section('content')
@include('includes.tinyeditor')

<h1>Create Post</h1>
<div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Form validation <small>sub title</small></h2>
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
<div class="x_content">

    <div class="row">
       {!! Form::open(['method'=>'POST', 'action'=> 'AdminPostsController@store', 'files'=>true]) !!}

       <div class="form-group">
           {!! Form::label('title', 'Title:') !!}
           {!! Form::text('title', null, ['class'=>'form-control'])!!}
       </div>

       <div class="form-group">
        {!! Form::label('category_id', 'Category:') !!}
        {!! Form::select('category_id', [''=>'Choose Categories'] + $categories, null, ['class'=>'form-control'])!!}
    </div>


    <div class="form-group">
        {!! Form::label('department_id', 'Department:') !!}
        {!! Form::select('department_id', [''=>'Choose Department'] + $departments, null, ['class'=>'form-control'])!!}
    </div>
    
    <div class="form-group">
        {!! Form::label('status_id', 'Status:') !!}
        {!! Form::select('status_id', [''=>'Choose Status'] + $status, null, ['class'=>'form-control'])!!}
    </div>


    <div class="form-group">
        {!! Form::label('photo_id', 'Photo:') !!}
        {!! Form::file('photo_id', null,['class'=>'form-control'])!!}
    </div>


    <div class="form-group">
        {!! Form::label('body', 'Description:') !!}
        {!! Form::textarea('body', null, ['class'=>'form-control'])!!}
    </div>
    <div class="form-group">
        {!! Form::submit('Create Post', ['class'=>'btn btn-primary']) !!}
    </div>

    {!! Form::close() !!}

</div>
<div class="row">
    @include('includes.form_error')
</div>
</div>
@stop