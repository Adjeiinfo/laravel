@extends('layouts.admin')

@section('content')
    <h1>Status</h1>
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





@stop