@extends('layouts.ha_admin')

@section('content')
<h1>Department</h1>
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

          {!! Form::open(['method'=>'POST', 'action'=> 'AdminDepartmentsController@store']) !!}
          <div class="form-group">
           {!! Form::label('name', 'Name:') !!}
           {!! Form::text('name', null, ['class'=>'form-control'])!!}
         </div>

         <div class="form-group">
           {!! Form::submit('Create Departement', ['class'=>'btn btn-primary']) !!}
         </div>
         {!! Form::close() !!}
       </div>

       <div class="col-sm-6">
        @if($departments)
        <table class="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Created date</th>
            </tr>
          </thead>
          <tbody>
            @foreach($departments as $department)
            <tr>
              <td>{{$department->id}}</td>
              <td><a href="{{route('admin.departments.edit', $department->id)}}">{{$department->name}}</a></td>
              <td>{{$department->created_at ? $department->created_at->diffForHumans() : 'no date'}}</td>
            </tr>
            @endforeach
          </tbody>
        </table>
        @endif
      </div>
    </div>
  </div>
</div>
</div>
  @stop