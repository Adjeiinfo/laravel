@extends('layouts.ha_admin')

@section('content')
<!-- Blog Post -->
<div class="container">
    <div class ="col-md-8">
      <!-- Title -->
      <h3>{{$post->title}}</h3>
      <!-- Author -->
      <p class="lead">
        Par {{$post->nom}}
    </p>

    <!-- Date/Time -->
    <!--  <p><span class="glyphicon glyphicon-time"></span> Envoye {{$post->created_at->diffForHumans()}}</p>-->
    <hr>

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
    <div class="well">
       <div class="card mb-3">
        <div class="card-body row">
            <strong><h3>Information du Client:</h3></strong>
            <hr>
            <div class="col-md-6">
                <p><strong>Nom Client</strong>: {!!$post->user->name!!}</p>
                <p><strong>Type Client</strong>: 
                    <span style="color: #e9551e">{!! $post->status->name!!}</span>
                </p>
                <p><strong>N. De Compte</strong>: 
                    <span style="color: #830909">
                        High
                    </span>
                </p>
            </div>
            <div class="col-md-6">
                <p> <strong>Addresse Postale</strong>: {!!$post->user->name!!}</p>
                <p><strong>Telephone</strong>: 
                    <span style="color: #ff0000">1</span></p>
                    <p> <strong>Email</strong>: 2 weeks ago</p>
                    <p> <strong>A notifier par: </strong>: 1 week ago</p>
                </div>
            </div>
        </div>
    </div>
    <div class="well">
        <div class="card mb-3">
            <div class="card-body row">
                <strong><h3>Classification NSIA:</h3></strong>
                <hr>
                <div class="col-md-6">
                 <p><strong>Departement: </strong>: {!!$post->user->name!!}</p>
                 <p><strong>Assigne a: </strong>: {!!$post->user->name!!}</p>
                 <p><strong>Status</strong>: 
                    <span style="color: #e9551e">{!! $post->status->name!!}</span>
                </p>
                <p><strong>Priorite</strong>:<span style="color: #830909">High</span></p>
            </div>
            <div class="col-md-6">
                <p> <strong>Date de Soumission</strong>: {!!$post->user->name!!}</p>
                <p>
                    <strong>Derniere Modification</strong>: 
                    <span style="color: #ff0000">
                        1
                    </span>
                </p>
                <p> <strong>Date de Cloture</strong>: 2 weeks ago</p>
                <p> <strong>Date de fermeture </strong>: 1 week ago</p>
            </div>
        </div>
    </div>
</div>

<div class="card well">
    <h3>Detail et Action:</h3>
    <hr>
    <h5 class="card-header d-flex justify-content-between align-items-baseline flex-wrap">
        <div class="form-group float-right">
            <button type="button" class="btn btn-info" onclick="$('#myDIV').toggle();">
                Notifier Client
            </button> 
            <a href="{{route('ticket_close',$post->id)}}" class="btn btn-warning">Fermer</a>    
            <a href="{{route('ticket_delete',$post->id)}}" class="btn btn-danger " form="delete-ticket-1">Supprimer</a>
            
        </div>

        <div id="myDIV" style="display: none">
            @if ($post->type_notification=='email')
            <div class="well">
                <h4>Votre Message Au Client</h4>
                {!! Form::open(array('action' => array('NotificationController@sendmail', $post->id), 'method' => 'get')) !!}
                <input type="hidden" name="post_id" value="{{$post->id}}">
                <div class="form-group">
                    {!! Form::textarea('body', null, ['class'=>'form-control','rows'=>3])!!}
                </div>
                <div class="form-group">
                    {!! Form::submit('Envoyer Messagage', ['class'=>'btn btn-primary']) !!}
                    {!! Form::close() !!}
                </div>
            </div>
            @else
            <div class="well">
                <h4>Votre SMS Au client (70 Character Max)</h4>
                {!! Form::open(array('action' => array('NotificationController@sendsms', $post->id), 'method' => 'get')) !!}
                <input type="hidden" name="post_id" value="{{$post->id}}">
                <div class="form-group">
                    {!! Form::textarea('body', null, ['class'=>'form-control','rows'=>3,'maxlength' => '70'])!!}
                </div>
                <div class="form-group">
                    {!! Form::submit('Envoyer Messagage', ['class'=>'btn btn-primary']) !!}
                    {!! Form::close() !!}
                </div>
            </div>
            @endif
            <div id="yourDIV">
            </h5>
            <hr>
            <div class="card-body ">
                <div class="card mb-3">
                    <div class="card-body row">
                        <div class="col-md-6">
                            <p> <strong>Objet de la reclamation</strong>: 1 week ago</p>
                            <p><strong>Date de la  transaction</strong>: {!!$post->user->name!!}</p>
                            <p>
                                <strong>Lieu de la Transaction</strong>: 
                                <span style="color: #e9551e">{!! $post->status->name!!}</span>
                            </p>

                        </div>
                        <div class="col-md-6">
                            <p> <strong>Nature de l'evenement</strong>: {!!$post->user->name!!}</p>
                            <p>
                                <strong>Evenement observe</strong>: 
                                <span style="color: #ff0000">
                                    1
                                </span>
                            </p>
                            <p> <strong>Resultat</strong>: 2 weeks ago</p>
                            <p> <strong>Montant de la transaction</strong>: 2 weeks ago</p>
                            
                        </div>
                    </div>
                </div>
            </div>
            
            <p><strong>Detail de la Reclamation</strong></p>
            <hr>
            <p>{!!$post->body!!}</p>
        </div>
        <div class="well">
            <h4>Votre Commentaire:</h4>
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
            @if(count($comment->replies) > 0)
            @foreach($comment->replies as $reply)
            @if($reply->is_active == 1)
            <!-- Nested Comment -->
            <div id="nested-comment" class=" media">
                <a class="pull-left" href="#">
                    <img height="64" class="media-object" src="{{$reply->photo}}" alt="">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading"{{$reply->author}}
                    <small>{{$reply->created_at->diffForHumans()}}</small>
                </h4>
                <p>{{$reply->body}}</p>
            </div>
            <div class="comment-reply-container">
                <button class="toggle-reply btn btn-primary pull-right">Reply</button>
                <div class="comment-reply col-sm-6">
                    {!! Form::open(['method'=>'POST', 'action'=> 'CommentRepliesController@createReply']) !!}
                </div>
                <div class="form-group">
                    <input type="hidden" name="comment_id" value="{{$comment->id}}">
                    {!! Form::label('body', 'Body:') !!}
                    {!! Form::textarea('body', null, ['class'=>'form-control','rows'=>1])!!}
                </div>

                <div class="form-group">
                    {!! Form::submit('submit', ['class'=>'btn btn-primary']) !!}
                    {!! Form::close() !!}
                </div>
            </div>
            <!-- End Nested Comment -->
            @else
            <h1 class="text-center">No Replies</h1>
            @endif
            @endforeach
            @endif
        </div>
    </div>
    @endforeach
    @endif

</div>
@include('includes.front_sidebar')
</div>

@stop

@section('scripts')
<script>
    $(".comment-reply-container .toggle-reply").click(function(){
        $(this).next().slideToggle("slow");
    });
</script>
<script>
    function myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
</script>

@stop




