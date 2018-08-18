@extends('layouts.ha_admin')

@section('content')
<h1>Status</h1>
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
        <div class="col-sm-6">

          {!! Form::model($status, ['method'=>'PATCH', 'action'=> ['AdminStatusController@update', $status->id]]) !!}
          <div class="form-group">
            {!! Form::label('name', 'Name:') !!}
            {!! Form::text('name', null, ['class'=>'form-control'])!!}
          </div>

          <div class="form-group">
            {!! Form::submit('Update Status', ['class'=>'btn btn-primary col-sm-6 ']) !!}
          </div>
          {!! Form::close() !!}


          {!! Form::open(['method'=>'DELETE', 'action'=> ['AdminStatusController@destroy', $status->id]]) !!}


          <div class="form-group">
            {!! Form::submit('Delete Status', ['class'=>'btn btn-danger col-sm-6']) !!}
          </div>
          {!! Form::close() !!}
        </div>
        <div class="col-sm-6">
        </div>
      </div>

    </div>
  </div>
</div>
@stop