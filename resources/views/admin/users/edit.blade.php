@extends('layouts.ha_admin')
@section('content')

<h1>Modification des information de l'Agent</h1>
<div class="row">
    <div class="col-sm-3">
        <img src="{{$user->photo ? $user->photo->file : 'http://placehold.it/400x400'}}" alt="" class="img-responsive img-rounded">
    </div>
    <div class="col-sm-9">
        {!! Form::model($user, ['method'=>'PATCH', 'action'=> ['AdminUsersController@update', $user->id],'files'=>true]) !!}
        <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
            {!! Form::label('name', 'Name:') !!}
            {!! Form::text('name', null, ['class'=>'form-control'])!!}
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
            {!! Form::label('email', 'Email:') !!}
            {!! Form::email('email', null, ['class'=>'form-control'])!!}
        </div>

        <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
            <div class="form-group">
                <strong>Roles:</strong>
                <br/>
                @foreach($roles as $value)
                <label>{{ Form::checkbox('roles[]', $value, in_array($value, $userRole) ? true : false, array('class' => 'name')) }}
                {{ $value }}</label>
                <br/>
                @endforeach
            </div>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
            <div class="form-group">
                <strong>Permission:</strong>
                <br/>
                @foreach($permissions as $value)
                <label>{{ Form::checkbox('permissions[]', $value->id, in_array($value->id, $userPermissions) ? true : false, array('class' => 'name')) }}
                    {{ $value->name }}</label>
                    <br/>
                    @endforeach
                </div>
            </div>

            <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                {!! Form::label('department_id', 'Department:') !!}
                {!! Form::select('department_id',$departments , null, ['class'=>'form-control'])!!}
            </div>

            <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                {!! Form::label('agence_id', 'Agence:') !!}
                {!! Form::select('agence_id', [''=>'Choose Options'] + $agences , null, ['class'=>'form-control'])!!}
            </div>

            <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                {!! Form::label('is_active', 'Status:') !!}
                {!! Form::select('is_active', array(1 => 'Active', 0=> 'Not Active'), null , ['class'=>'form-control'])!!}
            </div>

            <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                {!! Form::label('photo_id', 'Photo:') !!}
                {!! Form::file('photo_id', null, ['class'=>'form-control'])!!}
            </div>

            <div class="col-md-6 col-sm-6 form-group has-feedback">
                {!! Form::label('password', 'Password:') !!}
                {!! Form::password('password', ['class'=>'form-control'])!!}
            </div>

            <div class="form-group has-feedback">
                {!! Form::submit('Update User', ['class'=>'btn btn-primary col-sm-6']) !!}
            </div>
            {!! Form::close() !!}

            {!! Form::open(['method'=>'DELETE', 'action'=> ['AdminUsersController@destroy', $user->id]]) !!}
            <div class="form-group has-feedback">
                {!! Form::submit('Delete user', ['class'=>'btn btn-danger col-sm-6']) !!}
            </div>
            {!! Form::close() !!}
        </div>
    </div>
    <div class="row">
        @include('includes.form_error')
    </div>
</div>
@stop