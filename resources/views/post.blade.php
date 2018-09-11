@extends('layouts.ha_admin')
@section('content')
@include('includes.tinyeditor')
<h1>Information Detaillee de la Reclamation</h1>  
<div class="container">
    <div class ="col-md-8">
      <!-- Title -->
      <h3>{{$post->ns_event_object}}</h3>
      <!-- Author -->
      <p class="lead">
       

         Identifiant de la Reclamation:  {{$post->id}}
    </p>
    <!-- Date/Time -->
    <!--  <p><span class="glyphicon glyphicon-time"></span> Envoye {{$post->created_at->diffForHumans()}}</p>-->
    
    @if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
    @endif
    @if (session('success'))
    <div class="alert alert-success">
        {{ session('success') }}
    </div>
    @endif
    @if (session('fail'))
    <div class="alert alert-danger">
        {{ session('status') }}
    </div>
    @endif
    @if (session('comment_message'))
    <div class="alert alert-success">
        {{ session('comment_message') }}
    </div>
    @endif
</div>
<div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12 ">
    <div class="x_panel">

        <div class="x_content">
            <div class="row row-eq-height ">
                <div class="col-md-6">
                  <div class="well">
                     <div class="card mb-3">
                        <div class="card-body row">
                          <strong><h3>Information du Client:</h3></strong>
                          <hr>
                          <div class="col-md-6">
                            <p><strong>Nom Client</strong>: {!! $post->ns_nom_prenom !!}</p>
                            <p><strong>Type Client</strong>: 
                                <span style="color: #e9551e">{!! $post->typeclient->name !!}</span>
                            </p>
                            <p><strong>N. Compte</strong>: 
                                <span style="color: #e9551e">{!! $post->ns_compte_bancaire !!}</span>
                            </p>
                            <p><strong>Agence</strong>: 
                                <span style="color: #e9551e">{!! $post->agence->name !!}</span>
                            </p>
                        </div>
                        <div class="col-md-6">
                            <p> <strong>Addresse Postale: </strong> {!!$post->ns_address_postale!!}</p>
                            <p> <strong>Email: </strong> {!!$post->ns_address_email!!}</p>
                            <p> <strong>Telephone: </strong> {!!$post->ns_phone!!}</p>
                            <p> <strong>Type Nofication: </strong> {!!$post->typenotification->name!!}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="well">
               <div class="card mb-3">
                  <div class="card-body row">
                    <strong><h3>NSIA CLASSIFICATION:</h3></strong>
                    <hr>
                    <div class="col-md-6">
                       <p><strong>Departement: </strong>: {!!$post->department->name!!}</p>
                       <p><strong>Assigne a: </strong>: {!! $post->user ? $post->user->name : 'Not assigned' !!}</p>
                       <p><strong>Status</strong>: 
                        <span style="color: #e9551e">{!! $post->status->name!!}</span>
                    </p>
                    <p><strong>Priorite: </strong><span style="color: #830909">{!! $post->priority->name!!}</span></p>
                </div>
                <div class="col-md-6">
                    <p> <strong>Date de Soumission: </strong> {!!$post->ns_date_summission!!}</p>
                    <p>
                        <strong>Derniere Modification: </strong>
                        <span style="color: #ff0000">
                            {!!$post->updated_at!!}
                        </span>
                    </p>
                    <p> <strong>Date de Completion: </strong>{!! $post->ns_complete_at !!}</p>
                    <p> <strong>Date de fermeture: </strong>{!! $post->ns_close_at!!}</p>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
<div class="well">
   <div class="card mb-3">
      <div class="card-body row">
        <strong><h3>Detail de la Reclamation:</h3></strong>
        <hr>
        <div class="card-header d-flex justify-content-between align-items-baseline flex-wrap">
            <div class="form-group float-right">
                <button type="button" class="btn btn-info" onclick="$('#myDIV').toggle();">
                    Notifier Client
                </button> 
                <a href="{{route('ticket_close',$post->id)}}" class="btn btn-warning">Fermer</a>    
                <!--<a href="{{route('ticket_delete',$post->id)}}" class="btn btn-danger " form="delete-ticket-1">Supprimer</a>-->
                <a href="{{route('ticket_delete',$post->id)}}" class="btn btn-danger  pull-right" form="delete-ticket-1">Supprimer</a>
                <a href="{{route('ticket_nonfonde',$post->id)}}" class="btn btn-warning pull-right" form="ticket_nonfonde">Marquer Non-Fonde</a>
            </div>
            <div id="myDIV" style="display: none">
                @if ($post->typenotification->name =='Par Email')
                <div class="well">
                    <h4>Votre Email Au client (Pas de limite de caractere mais soyons bref et clair!)</h4>

                    {!! Form::open(array('action' => array('NotificationController@sendmail', $post->id), 'method' => 'get')) !!}
                    <input type="hidden" name="post_id" value="{{$post->id}}">
                    <div class="form-group">
                        {!! Form::textarea('mailbody', null, ['class'=>'form-control','rows'=>3])!!}
                    </div>
                    <div class="form-group">
                        {!! Form::submit('Envoyer Messagage', ['class'=>'btn btn-primary']) !!}
                        {!! Form::close() !!}
                    </div>
                </div>
                @else
                <div class="well">
                    <h4>Votre SMS Au client (64 Character Max)</h4>
                    {!! Form::open(array('action' => array('NotificationController@sendsms', $post->id), 'method' => 'get')) !!}
                    <input type="hidden" name="post_id" value="{{$post->id}}">
                    <div class="form-group">
                        {!! Form::textarea('smsbody', null, ['class'=>'form-control','rows'=>3,'maxlength' => '64'])!!}
                    </div>
                    <div class="form-group">
                        {!! Form::submit('Envoyer Messagage', ['class'=>'btn btn-primary']) !!}
                        {!! Form::close() !!}
                    </div>
                </div>
                @endif
            </div>
            <div id="yourDIV">
                <hr>
                <div class="card-body ">
                    <div class="card mb-3">
                        <div class="card-body row">
                            <div class="col-md-6">
                                <p> <strong>Objet de la reclamation: </strong>{!!$post->department->name!!}</p>
                                <p><strong>Date de la  transaction: </strong>{!!$post->ns_date_transaction!!}</p>
                                <p>
                                    <strong>Lieu de la Transaction: </strong> 
                                    <span style="color: #e9551e">{!! $post->ns_event_place !!}</span>
                                </p>
                            </div>
                            <div class="col-md-6">
                                <p> <strong>Nature de l'evenement: </strong> {!! $post->nature_transaction->name!!}</p>
                                <p>
                                    <strong>Evenement observe: </strong>
                                    <span style="color: #ff0000">
                                        {!! $post->ns_event_observe!!}
                                    </span>
                                </p>
                                <p> <strong>Resultat: </strong>{!!$post->ns_event_result !!}</p>
                                <p> <strong>Montant de la transaction: </strong>{!! $post->ns_event_montant !!}</p>         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p><strong>Detail de la Reclamation</strong></p>
            <hr>
            <p>{!!$post->ns_event_detail!!}</p>
        </div>
    </div>
</div>
</div>

<div class="well">
   <strong><h3>Votre Commentaire:</h3></strong>
   {!! Form::open(['method'=>'POST', 'action'=> 'PostCommentsController@store']) !!}
   <input type="hidden" name="post_id" value="{{$post->id}}">
   <div class="form-group">
    {!! Form::label('body', 'Body:') !!}
    {!! Form::textarea('body', null, ['class'=>'form-control','rows'=>3])!!}
</div>
<div class="form-group">
    {!! Form::submit('Submit comment', ['class'=>'btn btn-primary']) !!}
    {!! Form::close() !!}
</div>

    <!-- Preview Image 
    <img class="img-responsive" src="{{$post->photo ? $post->photo->file : $post->photoPlaceholder()}}" alt="">
    <hr>
    Post Content -->
    <!-- Blog Comments -->
    @if(Auth::check())
    <!-- Comments Form -->
    @endif
    <!-- Posted Comments -->
    @if(count($comments) > 0)
    @foreach($comments as $comment)
    <!-- Comment -->
    <div class="media">
        <a class="pull-left" href="#">
            <img height="64" class="media-object" src="{{Auth::user()->gravatar}}" alt="">
        </a>
        <div class="media-body">
            <h4 class="media-heading">{{$comment->author}}
                <small>{{$comment->created_at->diffForHumans()}}</small>
            </h4>
            <p>{{$comment->body}}</p>
        </div>
    </div>
    @endforeach
    @endif
</div>
</div>
</div>
</div>

<div class="row">
  @include('includes.form_error')
</div>


</div>
@stop