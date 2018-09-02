@extends('layouts.ha_admin')

@section('content')


<h1>Create Users</h1>
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

       {!! Form::open(['method'=>'POST', 'action'=> 'AdminUsersController@store','files'=>true]) !!}
       <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
         {!! Form::label('name', 'Name:') !!}
         {!! Form::text('name', null, ['class'=>'form-control'])!!}
       </div>

       <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
        {!! Form::label('email', 'Email:') !!}
        {!! Form::email('email', null, ['class'=>'form-control'])!!}
      </div>

      <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
        <strong>Roles:</strong>
        <div class="well">
          <div class="form-group">
            
            <br/>
            @foreach($roles as $value)
            <label>{{ Form::checkbox('roles[]', $value, false, array('class' => 'name')) }}
            {{ $value }}</label>
            <br/>
            @endforeach
          </div>
        </div>
      </div>


      <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
         <strong>Permission (A specifier quand necessaire)'):</strong>
       <div class="well">

        <br/>
        @foreach($permissions as $value)
        <label>{{ Form::checkbox('permissions[]', $value, false, array('class' => 'name')) }}
        {{ $value }}</label>
        <br/>
        @endforeach
      </div>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
      {!! Form::label('department_id', 'Department:') !!}
      {!! Form::select('department_id', [''=>'Choose Options'] + $departments , null, ['class'=>'form-control'])!!}
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
      {!! Form::label('agence_id', 'Agence:') !!}
      {!! Form::select('department_id', [''=>'Choose Options'] + $agences , null, ['class'=>'form-control'])!!}
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
      {!! Form::label('is_active', 'Status:') !!}
      {!! Form::select('is_active', array(1 => 'Active', 0=> 'Not Active'), 0 , ['class'=>'form-control'])!!}
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
      {!! Form::label('photo_id', 'Photo:') !!}
      {!! Form::file('photo_id', null, ['class'=>'form-control'])!!}
    </div>
    <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
      {!! Form::label('password', 'Password:') !!}
      {!! Form::password('password', ['class'=>'form-control'])!!}
    </div>


    <div class="form-group">
      {!! Form::submit('Create User', ['class'=>'btn btn-primary']) !!}
    </div>

    {!! Form::close() !!}
    @include('includes.form_error')

  </div>
</div>
</div>
</div>
@stop