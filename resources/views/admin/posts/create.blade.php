@extends('layouts.ha_admin')

@section('content')
@include('includes.tinyeditor')

<h1>Create Post</h1>
<div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Form validation <small>sub title</small></h2>
        <ul class="nav navbar-right panel_toolbox">
          <li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
          </li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Settings 1</a>
              </li>
              <li><a href="#">Settings 2</a>
              </li>
            </ul>
          </li>
          <li><a class="close-link"><i class="fa fa-close"></i></a>
          </li>
        </ul>
        <div class="clearfix"></div>
      </div>
      <div class="x_content">

        <div class="row">
         {!! Form::open(['method'=>'POST', 'action'=> 'AdminPostsController@store', 'files'=>true]) !!}

         <div class="well">
           <div class="card mb-3">
            <div class="card-body row">
              <strong><h3>Information du Client:</h3></strong>
              <hr>
              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="Nom & Prenom">-->
                {!! Form::text('ns_nom_prenom',null, ['placeholder' => 'Nom', 'class' => 'form-control has-feedback-left']) !!}
                <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
               {!! Form::text('ns_user_type',null, ['placeholder' => 'Type', 'class' => 'form-control has-feedback-right']) !!}
               <!--<input type="text" class="form-control" id="inputSuccess3" placeholder="Type">-->
               <span class="fa fa-bank form-control-feedback right" aria-hidden="true"></span>
             </div>

             <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
              {!! Form::text('ns_user_mail',null, ['placeholder' => 'Addresse Email', 'class' => 'form-control has-feedback-left']) !!}
              <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="Email">-->
              <span class="fa fa-bank form-control-feedback left" aria-hidden="true"></span>
            </div>

            <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
             <!-- <input type="text" class="form-control" id="inputSuccess5" placeholder="Phone">-->
             {!! Form::text('ns_user_phone',null, ['placeholder' => 'Telephone +225 XXXX', 'class' => 'form-control has-feedback-right']) !!}
             <span class="fa fa-phone form-control-feedback right" aria-hidden="true"></span>
           </div>

           <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
             <!-- <input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="N. Compte">-->
             {!! Form::text('ns_user_compte',null, ['placeholder' => 'N. Compte', 'class' => 'form-control has-feedback-left']) !!}
             <span class="fa fa-credit-card form-control-feedback left" aria-hidden="true"></span>
           </div>

           <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
             <!-- <input type="text" class="form-control" id="inputSuccess3" placeholder="Notifer par">-->
             {!! Form::text('ns_user_notification_type',null, ['placeholder' => 'N. Compte', 'class' => 'form-control has-feedback-right']) !!}
             <span class="fa fa-mail-reply form-control-feedback right" aria-hidden="true"></span>
           </div>
           <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
           </div>
           <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
             <!-- <input type="text" class="form-control" id="inputSuccess3" placeholder="Notifer par">-->
             {!! Form::text('ns_user_addrese_postale',null, ['placeholder' => 'Addresse Postale', 'class' => 'form-control has-feedback-right']) !!}
             <span class="fa fa-mail-reply form-control-feedback right" aria-hidden="true"></span>
           </div>
         </div>
       </div>
     </div>

     <div class="well">
       <div class="card mb-3">
        <div class="card-body row">
          <strong><h3>NSIA CLASSIFICATION:</h3></strong>
          <hr>
          <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
            <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="Nom & Prenom">-->
            {!! Form::text('ns_type_carte',null, ['placeholder' => 'Type Carte', 'class' => 'form-control has-feedback-left']) !!}
            <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
            {!! Form::text('ns_date_soumission',null, ['placeholder' => 'Date Soumission', 'class' => 'form-control has-feedback-right','id' => 'datepicker']) !!}
           <!--<input type="text" class="form-control" id="inputSuccess3" placeholder="Type">-->
           <span class="fa fa-calendar form-control-feedback right" aria-hidden="true"></span>
         </div>

         <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
          {!! Form::text('ns_user_mail',null, ['placeholder' => 'Addresse Email', 'class' => 'form-control has-feedback-left']) !!}
          <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="Email">-->
          <span class="fa fa-bank form-control-feedback left" aria-hidden="true"></span>
        </div>

        <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
         <!-- <input type="text" class="form-control" id="inputSuccess5" placeholder="Phone">-->
         {!! Form::text('ns_priorite',null, ['placeholder' => 'Priorite', 'class' => 'form-control has-feedback-right']) !!}
         <span class="fa fa-phone form-control-feedback right" aria-hidden="true"></span>
       </div>

       <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
         <!-- <input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="N. Compte">-->
         {!! Form::text('ns_user_compte',null, ['placeholder' => 'N. Compte', 'class' => 'form-control has-feedback-left']) !!}
         <span class="fa fa-credit-card form-control-feedback left" aria-hidden="true"></span>
       </div>

       <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
         <!-- <input type="text" class="form-control" id="inputSuccess3" placeholder="Notifer par">-->
         {!! Form::text('ns_user_notification_type',null, ['placeholder' => 'N. Compte', 'class' => 'form-control has-feedback-right']) !!}
         <span class="fa fa-mail-reply form-control-feedback right" aria-hidden="true"></span>
       </div>
       <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
       </div>
       <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
         <!-- <input type="text" class="form-control" id="inputSuccess3" placeholder="Notifer par">-->
         {!! Form::text('ns_user_addrese_postale',null, ['placeholder' => 'Addresse Postale', 'class' => 'form-control has-feedback-right']) !!}
         <span class="fa fa-mail-reply form-control-feedback right" aria-hidden="true"></span>
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
       <p><strong>Departement: </strong>: {!}</p>
       <p><strong>Assigne a: </strong>: {}</p>
       <p><strong>Status</strong>: 
        <span style="color: #e9551e">{}</span>
      </p>
      <p><strong>Priorite</strong>:<span style="color: #830909">High</span></p>
    </div>
    <div class="col-md-6">
      <p> <strong>Date de Soumission</strong>: {}</p>
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

<div class="form-group">
 {!! Form::label('title', 'Title:') !!}
 {!! Form::text('title', null, ['class'=>'form-control'])!!}
</div>

<div class="form-group">
  {!! Form::label('category_id', 'Category:') !!}
  {!! Form::select('category_id', [''=>'Choose Categories'] + $categories, null, ['class'=>'form-control'])!!}
</div>


<div class="form-group">
  {!! Form::label('department_id', 'Department:') !!}
  {!! Form::select('department_id', [''=>'Choose Department'] + $departments, null, ['class'=>'form-control'])!!}
</div>

<div class="form-group">
  {!! Form::label('status_id', 'Status:') !!}
  {!! Form::select('status_id', [''=>'Choose Status'] + $status, null, ['class'=>'form-control'])!!}
</div>


<div class="form-group">
  {!! Form::label('photo_id', 'Photo:') !!}
  {!! Form::file('photo_id', null,['class'=>'form-control'])!!}
</div>


<div class="form-group">
  {!! Form::label('body', 'Description:') !!}
  {!! Form::textarea('body', null, ['class'=>'form-control'])!!}
</div>
<div class="form-group">
  {!! Form::submit('Create Post', ['class'=>'btn btn-primary']) !!}
</div>

{!! Form::close() !!}

</div>
<div class="row">
  @include('includes.form_error')
</div>
</div>
@stop