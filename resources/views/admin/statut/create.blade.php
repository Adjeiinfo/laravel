@extends('layouts.admin')

@section('content')
    <h1>Statut</h1>
    <div class="col-sm-6">

        {!! Form::model($statut, ['method'=>'PATCH', 'action'=> ['StatutController@update', $statut->id]]) !!}
        <div class="form-group">
            {!! Form::label('name', 'Name:') !!}
            {!! Form::text('name', null, ['class'=>'form-control'])!!}
        </div>

        <div class="form-group">
            {!! Form::submit('Update Statut', ['class'=>'btn btn-primary col-sm-6 ']) !!}
        </div>
        {!! Form::close() !!}


        {!! Form::open(['method'=>'DELETE', 'action'=> ['StatutController@destroy', $statut->id]]) !!}


        <div class="form-group">
            {!! Form::submit('Delete Statut', ['class'=>'btn btn-danger col-sm-6']) !!}
        </div>
        {!! Form::close() !!}
    </div>
    <div class="col-sm-6">

    </div>





@stop