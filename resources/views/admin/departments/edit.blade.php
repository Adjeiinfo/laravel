@extends('layouts.admin')

@section('content')
    <h1>Departement</h1>
    <div class="col-sm-6">

        {!! Form::model($departments, ['method'=>'PATCH', 'action'=> ['AdminDepartmentsController@update', $departments->id]]) !!}
        <div class="form-group">
            {!! Form::label('name', 'Name:') !!}
            {!! Form::text('name', null, ['class'=>'form-control'])!!}
        </div>

        <div class="form-group">
            {!! Form::submit('Update Departement', ['class'=>'btn btn-primary col-sm-6 ']) !!}
        </div>
        {!! Form::close() !!}


        {!! Form::open(['method'=>'DELETE', 'action'=> ['AdminDepartmentsController@destroy', $departments->id]]) !!}


        <div class="form-group">
            {!! Form::submit('Delete Departement', ['class'=>'btn btn-danger col-sm-6']) !!}
        </div>
        {!! Form::close() !!}
    </div>
    <div class="col-sm-6">

    </div>
@stop