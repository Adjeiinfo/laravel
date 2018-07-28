@extends('layouts.admin')

@section('content')


    <h1>Department</h1>


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
@stop