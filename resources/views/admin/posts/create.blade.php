@extends('layouts.ha_admin')

@section('content')
@include('includes.tinyeditor')
@include('includes.ha_script')

<h1>Créer une Réclamation</h1>
<div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Remplissez le formulaire suivant <small>Par l'agent</small></h2>
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
                {!! Form::text('ns_nom_prenom', null, ['placeholder' => 'Nom', 'class' => 'form-control has-feedback-left']) !!}
                <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
              </div>
              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
               {!! Form::text('ns_address_email',   null, ['placeholder' => 'Address E-mail', 'class' => 'form-control has-feedback-left']) !!}
               <span class="fa fa-envelope form-control-feedback left" aria-hidden="true"></span>
             </div>
             <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
               <!-- <input type="text" class="form-control" id="inputSuccess5" placeholder="Phone">-->
               {!! Form::text('ns_phone',null, ['placeholder' => 'Telephone +225 XXXX', 'class' => 'form-control has-feedback-left']) !!}
               <span class="fa fa-phone form-control-feedback left" aria-hidden="true"></span>
             </div>
             <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
               <!-- <input type="text" class="form-control" id="inputSuccess3" placeholder="Notifer par">-->
               {!! Form::text('ns_address_postale',null, ['placeholder' => 'Addresse postale', 'class' => 'form-control has-feedback-left']) !!}
               <span class="fa fa-mail-reply form-control-feedback left" aria-hidden="true"></span>
             </div>
             <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
               <!-- <input type="text" class="form-control" id="inputSuccess3" placeholder="Notifer par">-->
               {!! Form::select('typenotification_id', [''=>'Comment Vous Contacter'] +$notifications, null,['class' => 'form-control has-feedback-left']) !!}
               <span class="fa fa-comments form-control-feedback left" aria-hidden="true"></span>
             </div>
           </div>
         </div>
       </div>

       <div class="well">
         <div class="card mb-3">
          <div class="card-body row">
            <strong><h3>CLASSIFICATION:</h3></strong>
            <hr>
            <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">

             {!! Form::select('typeclient_id', [''=>'Statut Client'] + $clients, null,['class' => 'form-control has-feedback-left']) !!}
             <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="Email">-->
             <span class="fa fa-bank form-control-feedback left" aria-hidden="true"></span>
           </div>

           <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">

            {!! Form::select('agence_id', [''=>'Choisir Agence'] + $agences, null,['class' => 'form-control has-feedback-left']) !!}

            <span class="fa fa-bank form-control-feedback left" aria-hidden="true"></span>

          </div>

          <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
            <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="Nom & Prenom">-->
            {!! Form::select('typecarte_id', [''=>'Choisissez Type de Carte'] + $cartes, null,['class' => 'form-control has-feedback-left']) !!}

            <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
           <!-- <input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="N. Compte">-->
           {!! Form::text('ns_compte_bancaire',null, ['placeholder' => 'N. Compte', 'class' => 'form-control has-feedback-left']) !!}
           <span class="fa fa-credit-card form-control-feedback left" aria-hidden="true"></span>
         </div>

         <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback" id="t1">
          {!! Form::text('ns_date_summission',null, ['placeholder' => 'Date Soumission', 'class' => 'form-control has-feedback-left datepicker11','id' => 'datepicker'])!!}
          <span class="fa fa-calendar form-control-feedback left" aria-hidden="true"></span>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
         <!-- <input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="N. Compte">-->
         {!! Form::select('priority_id', [''=>'Choisissez Type la priorite'] + $prirorities, null,['class' => 'form-control has-feedback-left']) !!}
         <span class="fa fa-credit-card form-control-feedback left" aria-hidden="true"></span>
       </div>
     </div>
   </div>
 </div>

 <div class="well">
   <div class="card mb-3">
    <div class="card-body row">
      <strong><h3>Detail de la Reclamation:</h3></strong>
      <hr>
      <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
        <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="Nom & Prenom">-->

        {!! Form::select('department_id', [''=>'Choisir objet de la reclamation'] + $departments, null,['class' => 'form-control has-feedback-left']) !!}

        <span class="fa fa-question-circle form-control-feedback left" aria-hidden="true"></span>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
       {!! Form::text('ns_date_transaction' ,null, ['placeholder' => 'Date de la Transaction', 'class' => 'form-control has-feedback-left datepicker','id' => 'datepicker22']) !!}
       <span class="fa fa-envelope form-control-feedback left" aria-hidden="true"></span>
     </div>

     <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">

       {!! Form::select('ns_transaction_type', [''=>'Choisir Type Transaction'] + $transactions, null,['class' => 'form-control has-feedback-left']) !!}


       <span class="fa fa-envelope form-control-feedback left" aria-hidden="true"></span>
     </div>

     <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">

       {!! Form::select('nature_transaction_id', [''=>'Nature Transaction'] + $naturetransactions, null,['class' => 'form-control has-feedback-left']) !!}

       <span class="fa fa-envelope form-control-feedback left" aria-hidden="true"></span>
     </div>


     <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
      {!! Form::text('ns_event_place',   null, ['placeholder' => 'Lieu Transaction', 'class' => 'form-control has-feedback-left']) !!}
      <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="Email">-->
      <span class="fa fa-building-o form-control-feedback left" aria-hidden="true"></span>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
      {!! Form::text('ns_event_montant',   null, ['placeholder' => 'Montant Transaction', 'class' => 'form-control has-feedback-left']) !!}
      <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="Email">-->
      <span class="fa fa-building-o form-control-feedback left" aria-hidden="true"></span>
    </div>
    <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
     <!-- <input type="text" class="form-control" id="inputSuccess5" placeholder="Phone">-->
     {!! Form::text('ns_event_observe',null, ['placeholder' => 'Evènements constatés', 'class' => 'form-control has-feedback-left']) !!}
     <span class="fa fa-phone form-control-feedback left" aria-hidden="true"></span>
   </div>

   <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
     <!-- <input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="N. Compte">-->
     {!! Form::text('ns_event_result',null, ['placeholder' => 'Resultat', 'class' => 'form-control has-feedback-left']) !!}

     <span class="fa fa-credit-card form-control-feedback left" aria-hidden="true"></span>
   </div>

   <div class="form-group col-xs-12">
    {!! Form::label('body', 'Decrire Evement:') !!}
    {!! Form::textarea('ns_event_detail', null, ['class'=>'form-control'])!!}
  </div>

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
<div class="row">
<div class="well">

  {!! Form::submit('Soumettre', ['class'=>'btn btn-primary']) !!}
</div>
</div>

{!! Form::close() !!}
</div>
</div>
<div class="row">
  @include('includes.form_error')
</div>
</div>

<script type="text/javascript">
  jQuery(document).ready(function($) {
    $('.datepicker').datepicker({
      dateFormat: "yy-mm-dd"
    });
  });
</script>
@stop

