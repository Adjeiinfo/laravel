@extends('layouts.ha_admin')

@section('content')
<<<<<<< HEAD
    <!-- Blog Post -->
    <div class="container">
        <div class ="col-md-8">
          <!-- Title -->
            <h1>{{$post->title}}</h1>
            <!-- Author -->
            <p class="lead">
                by {{$post->user->name}}
            </p>
            <hr>
            <!-- Date/Time -->
            <p><span class="glyphicon glyphicon-time"></span> Posted {{$post->created_at->diffForHumans()}}</p>
            <hr>
            <!-- Preview Image -->
            <img class="img-responsive" src="{{$post->photo ? $post->photo->file : $post->photoPlaceholder()}}" alt="">
            <hr>
            <!-- Post Content -->
            <p>{!!$post->body!!}</p>
            <hr>
            
            <!-- Blog Comments -->
            @if(Auth::check())
            <!-- Comments Form -->
                <div class="well">
                    <h4>Leave a Comment:</h4>
                    {!! Form::open(['method'=>'POST', 'action'=> 'PostCommentsController@store']) !!}
                    <input type="hidden" name="post_id" value="{{$post->id}}">
                    <div class="form-group">
                    {!! Form::label('body', 'Body:') !!}
                    {!! Form::textarea('body', null, ['class'=>'form-control','rows'=>3])!!}
=======
<!-- Blog Post -->
<div class="container">
    <div class ="col-md-8">
      <!-- Title -->
      <h1>{{$post->title}}</h1>
      <!-- Author -->
      <p class="lead">
        by {{$post->user->name}}
    </p>
    <hr>
    <!-- Date/Time -->
    <p><span class="glyphicon glyphicon-time"></span> Posted {{$post->created_at->diffForHumans()}}</p>
    <hr>
        <div class="card well">
        <h5 class="card-header d-flex justify-content-between align-items-baseline flex-wrap">
            <span>Tar</span>

            <div pull-right>
                <a href="http://ticketit.test/tickets/1/complete" class="btn btn-success">Mark Complete</a>
                <button type="button" class="btn btn-info" data-toggle="modal" data-target="#ticket-edit-modal">
                    Edit
                </button>
                <a href="http://ticketit.test/tickets/1" class="btn btn-danger deleteit" form="delete-ticket-1" node="Tar">Delete</a>

            </div>
        </h5>
        <hr>
        <div class="card-body ">
            <div class="card mb-3">
                <div class="card-body row">
                    <div class="col-md-6">
                        <p><strong>Owner</strong>: {!!$post->user->name!!}</p>
                        <p>
                            <strong>Status</strong>: 
                            <span style="color: #e9551e">{!! $post->status->name!!}</span>
                        </p>
                        <p>
                            <strong>Priority</strong>: 
                            <span style="color: #830909">
                                High
                            </span>
                        </p>
>>>>>>> b989bb37867eb7303386eb4d7ceda427bcf74679
                    </div>
                    <div class="col-md-6">
                        <p> <strong>Responsible</strong>: {!!$post->user->name!!}</p>
                        <p>
                            <strong>Category</strong>: 
                            <span style="color: #ff0000">
                                1
                            </span>
                        </p>
                        <p> <strong>Created</strong>: 2 weeks ago</p>
                        <p> <strong>Last Update</strong>: 1 week ago</p>
                    </div>
                </div>
<<<<<<< HEAD
            @endif
            <hr>
=======
            </div>
        </div>
        <p>{!!$post->body!!}</p>
    </div>
     <div class="well">
        <h4>Leave a Comment:</h4>
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
    <hr>
    <!-- Blog Comments -->
    @if(Auth::check())
    <!-- Comments Form -->
    @endif
    <hr>
>>>>>>> b989bb37867eb7303386eb4d7ceda427bcf74679
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
    @stop




