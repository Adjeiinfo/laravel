@extends('layouts.admin')

@section('content')


    <h1>Status</h1>


    <div class="col-sm-6">

        {!! Form::open(['method'=>'POST', 'action'=> 'AdminStatusController@store']) !!}
             <div class="form-group">
                 {!! Form::label('name', 'Name:') !!}
                 {!! Form::text('name', null, ['class'=>'form-control'])!!}
             </div>

             <div class="form-group">
                 {!! Form::submit('Create Status', ['class'=>'btn btn-primary']) !!}
             </div>
        {!! Form::close() !!}
    </div>

    <div class="col-sm-6">
        @if($status)
            <table class="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Created date</th>
                </tr>
                </thead>
                <tbody>
                @foreach($status as $status)
                    <tr>
                        <td>{{$status->id}}</td>
                        <td><a href="{{route('admin.status.edit', $status->id)}}">{{$status->name}}</a></td>
                        <td>{{$status->created_at ? $status->created_at->diffForHumans() : 'no date'}}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        @endif
    </div>
@stop