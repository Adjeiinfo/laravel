@extends('layouts.admin')

@section('content')


    <h1>Statut</h1>


    <div class="col-sm-6">

        {!! Form::open(['method'=>'POST', 'action'=> 'StatutController@store']) !!}
             <div class="form-group">
                 {!! Form::label('name', 'Name:') !!}
                 {!! Form::text('name', null, ['class'=>'form-control'])!!}
             </div>

             <div class="form-group">
                 {!! Form::submit('Create Statut', ['class'=>'btn btn-primary']) !!}
             </div>
        {!! Form::close() !!}
    </div>

    <div class="col-sm-6">
        @if($statut)
            <table class="table">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Created date</th>
                </tr>
                </thead>
                <tbody>
                @foreach($statut as $statut)
                    <tr>
                        <td>{{$statut->id}}</td>
                        <td><a href="{{route('admin.statut.edit', $statut->id)}}">{{$statut->name}}</a></td>
                        <td>{{$statut->created_at ? $statut->created_at->diffForHumans() : 'no date'}}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        @endif
    </div>
@stop