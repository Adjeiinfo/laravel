
@if(Session::has('comment_message')) 
<div class="alert-success col-sm-6">
    <p class="text-center">{{session('comment_message')}}<p>
</div>
@endif