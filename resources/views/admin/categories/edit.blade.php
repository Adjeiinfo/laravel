@extends('layouts.ha_admin')
@section('content')
<h1>Categories </h1>
<div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Mise a Jour <small>Changer de nom</small></h1>
        <ul class="nav navbar-right panel_toolbox">
          <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
          </li>
          <li><a class="close-link"><i class="fa fa-close"></i></a>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="col-sm-6">
        {!! Form::model($category, ['method'=>'PATCH', 'action'=> ['AdminCategoriesController@update', $category->id]]) !!}
        <div class="form-group">
          {!! Form::label('name', 'Nom actuel:') !!}
          {!! Form::text('name', null, ['class'=>'form-control'])!!}
        </div>

        <div class="form-group">
          {!! Form::submit('Update Category', ['class'=>'btn btn-primary col-sm-6 ']) !!}
        </div>
        {!! Form::close() !!}
        {!! Form::open(['method'=>'DELETE', 'action'=> ['AdminCategoriesController@destroy', $category->id]]) !!}
        <div class="form-group">
          {!! Form::submit('Delete Category', ['class'=>'btn btn-danger col-sm-6']) !!}
        </div>
        {!! Form::close() !!}
      </div>
      <div class="col-sm-6">
      </div>
    </div>
  </div>
</div>

@stop