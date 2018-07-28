@extends('layouts.blog-home')

@section('content')

<!-- Page Content -->
<div class="container">

    <div class="row">

        <!-- Blog Entries Column -->
        <div class="col-md-8">

            @if($posts)
            
            <!-- First Blog Post -->
            @foreach($posts as $post)
                <h2>
                    <a href="#">{{$post->title}}</a>
                </h2>
                <p class="lead">
                    by {{$post->user->name}}
                </p>    
                <p><span class="glyphicon glyphicon-time"></span>{{$post->created_at->diffForHumans()}}</p>
                <hr>
                <img class="img-responsive" src="http://placehold.it/900x300" alt="">
                <hr>
                <p>{!!str_limit($post->body,200)!!}</p>
                <a class="btn btn-primary" href='/post/{{$post->slug}}'>Read More <span class="glyphicon glyphicon-chevron-right"></span></a>

                <hr>
            @endforeach

            
            <!-- Pagination-->
            @endif

        </div>

        <!-- Blog Sidebar Widgets Column -->
        @include('includes.front_sidebar')
            <!-- Side Widget Well -->
            <div class="well">
                <h4>Side Widget Well</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, perspiciatis adipisci accusamus laudantium odit aliquam repellat tempore quos aspernatur vero.</p>
            </div>

        </div>

    </div>
    <!-- /.row -->
</div>
@endsection
