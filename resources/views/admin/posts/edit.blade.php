@extends('layouts.ha_admin')
@section('content')
@include('includes.tinyeditor')
<h1>Modification de la Reclamation</h1>  

<div class="row">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="x_panel">
      <div class="x_title">
        <h2>Validation de la Reclamation <small>Modifier</small></h2>
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
          {!! Form::model($post, ['method'=>'PATCH', 'action'=> ['AdminPostsController@update', $post->id], 'files'=>true]) !!}
          <div class="well">
           <div class="card mb-3">
            <div class="card-body row">
              <strong><h3>Information du Client:</h3></strong>
              <hr>
              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
                {!! Form::label ('ns_nom_prenom', 'Nom et Prenoms:') !!}
                {!! Form::text('ns_nom_prenom', null, ['placeholder' => 'Nom', 'class' => 'form-control has-feedback-left']) !!}
                <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>

              </div>

              <!---->
              <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
               {!! Form::label ('ns_address_email', 'Addresse E-Mail:') !!}
               {!! Form::text('ns_address_email',   null, ['placeholder' => 'Address E-mail', 'class' => 'form-control has-feedback-left' ]) !!}
               <span class="fa fa-envelope form-control-feedback left" aria-hidden="true"></span>
             </div>

             <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
               {!! Form::label ('ns_phone', 'Contact Telephonique:') !!}
               {!! Form::text('ns_phone',null, ['placeholder' => 'Telephone +225 XXXX', 'class' => 'form-control has-feedback-left']) !!}
               <span class="fa fa-phone form-control-feedback left" aria-hidden="true"></span>
             </div>
             <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
               {!! Form::label ('ns_address_postale', 'Addresse Postale:') !!}
               {!! Form::text('ns_address_postale',null, ['placeholder' => 'Addresse postale', 'class' => 'form-control has-feedback-left']) !!}
               <span class="fa fa-mail-reply form-control-feedback left" aria-hidden="true"></span>
             </div>
             <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
               {!! Form::label ('typenotification_id', 'Moyen de Notification:') !!}
               {!! Form::select('typenotification_id', [''=>'Comment Vous Contacter'] + $notifications, null,['class' => 'form-control has-feedback-left']) !!}
               <span class="fa fa-comments form-control-feedback left" aria-hidden="true"></span>
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
             {!! Form::label ('typeclient_id', 'Statut Client:') !!}
             {!! Form::select('typeclient_id', [''=>'Statut Client'] + $clients, null,['class' => 'form-control has-feedback-left']) !!}
             <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="Email">-->
             <span class="fa fa-group form-control-feedback left" aria-hidden="true"></span>
           </div>

           <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
             {!! Form::label ('agence_id', 'Agence:') !!}
             {!! Form::select('agence_id', [''=>'Choisir Agence'] + $agences, null,['class' => 'form-control has-feedback-left']) !!}
             <span class="fa fa-bank form-control-feedback left" aria-hidden="true"></span>
           </div>

          <!-- <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">-->
            <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="Nom & Prenom">-->
           <!-- {!! Form::label ('typecarte_id', 'Type de Carte:') !!}
            {!! Form::select('typecarte_id', [''=>'Choisissez Type de Carte'] + $cartes, null,['class' => 'form-control has-feedback-left']) !!}

            <span class="fa fa-user form-control-feedback left" aria-hidden="true"></span>
          </div>-->
          <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
           <!-- <input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="N. Compte">-->
           {!! Form::label ('ns_compte_bancaire', 'Numero du Compte Client:') !!}
           {!! Form::text('ns_compte_bancaire',null, ['placeholder' => 'N. Compte', 'class' => 'form-control has-feedback-left']) !!}
           <span class="fa fa-credit-card form-control-feedback left" aria-hidden="true"></span>
         </div>
         <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback" id="t2">
          {!! Form::label ('ns_date_summission', 'Date de Soumission:') !!}
          {!! Form::text('ns_date_summission',null, ['placeholder' => 'Date Soumission', 'class' => 'form-control has-feedback-left datepicker','id' => 'datepicker2']) !!}
          <!--<input type="text" class="form-control" id="inputSuccess3" placeholder="Type">-->
          <span class="fa fa-calendar form-control-feedback left" aria-hidden="true"></span>
        </div>
        
        <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
          {!! Form::label ('typecarte_id', 'Type de Carte:') !!}
          {!! Form::text('typecarte_id',   null, ['placeholder' => 'Type Carte', 'class' => 'form-control has-feedback-left']) !!}
          <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="Email">-->
          <span class="fa fa-cc-visa form-control-feedback left" aria-hidden="true"></span>
        </div>

        <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
          {!! Form::label ('status_id', 'Statut de la Reclamation:') !!}
          {!! Form::select('status_id', [''=>'Choisir Statut'] + $status, null,['class' => 'form-control has-feedback-left']) !!}
          <span class="fa fa-legal form-control-feedback left" aria-hidden="true"></span>
        </div>

      </div>
    </div>
  </div>
  <div class="well">
   <div class="card mb-3">
    <div class="card-body row">
      <strong><h3>Responsabilite NSIA:</h3></strong>
      <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
       {!! Form::label ('priority_id', 'Priorite de la Reclamation:') !!}
       {!! Form::select('priority_id', [''=>'Priorite'] + $prirorities, null,['class' => 'form-control has-feedback-left']) !!}
       <span class="fa fa-exclamation-circle form-control-feedback left" aria-hidden="true"></span>
     </div>
     <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
       <!-- <input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="N. Compte">-->
       {!! Form::label ('user_id', 'Gestionnaire de la Reclamation:') !!}
       {!! Form::select('user_id', [''=>'Choisissez Gestionnaire'] + $users, null,['class' => 'form-control has-feedback-left']) !!}
       <span class="fa fa-check-square-o form-control-feedback left" aria-hidden="true"></span>
     </div>
     <hr>
   </div>
 </div>
</div>
<div class="well">
 <div class="card mb-3">
  <div class="card-body row">
    <strong><h3>Detail de la Reclamation:</h3></strong>
    <hr>
    <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
     {!! Form::label ('department_id', 'Objet de la Reclamation:') !!}
     {!! Form::select('department_id', [''=>'Choisir objet de la reclamation'] + $departments, null,['class' => 'form-control has-feedback-left']) !!}
     <span class="fa fa-question-circle form-control-feedback left" aria-hidden="true"></span>
   </div>
   <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback" id="t3">
     {!! Form::label('ns_date_transaction', 'Date de la Transaction:') !!}
     {!! Form::text('ns_date_transaction' ,null, ['placeholder' => 'Date de la Transaction', 'class' => 'form-control has-feedback-left datepicker','id' => 'datepicker1'])!!}
     <span class="fa fa-calendar form-control-feedback left" aria-hidden="true"></span>
   </div>
   <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
     {!! Form::label('type_transaction_id', 'Type de Transaction:') !!}
     {!! Form::select('type_transaction_id', [''=>'Choisir Type Transaction'] + $transactions, null,['class' => 'form-control has-feedback-left']) !!}
     <span class="fa fa-random form-control-feedback left" aria-hidden="true"></span>
   </div>

   <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
     {!! Form::label('nature_transaction_id', 'Nature de la Transaction:') !!}
     {!! Form::select('nature_transaction_id', [''=>'Nature Transaction'] + $naturetransactions, null,['class' => 'form-control has-feedback-left']) !!}
     <span class="fa fa-puzzle-piece form-control-feedback left" aria-hidden="true"></span>
   </div>
   <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
     {!! Form::label('ns_event_place', 'Lieu de la Transaction:') !!}
     {!! Form::text('ns_event_place',   null, ['placeholder' => 'Lieu Transaction', 'class' => 'form-control has-feedback-left']) !!}
     <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="Email">-->
     <span class="fa fa-building-o form-control-feedback left" aria-hidden="true"></span>
   </div>
   <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
    {!! Form::label('ns_event_montant', 'Montant de la Transaction:') !!}
    {!! Form::text('ns_event_montant',   null, ['placeholder' => 'Montant Transaction', 'class' => 'form-control has-feedback-left']) !!}
    <!--<input type="text" class="form-control has-feedback-left" id="inputSuccess4" placeholder="Email">-->
    <span class="fa fa-eur form-control-feedback left" aria-hidden="true"></span>
  </div>
  <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
   <!-- <input type="text" class="form-control" id="inputSuccess5" placeholder="Phone">-->
   {!! Form::label('ns_event_observe', 'Evènements constatés:') !!}
   {!! Form::text('ns_event_observe',null, ['placeholder' => 'Evènements constatés', 'class' => 'form-control has-feedback-left']) !!}
   <span class="fa fa-eye form-control-feedback left" aria-hidden="true"></span>
 </div>

 <div class="col-md-6 col-sm-6 col-xs-12 form-group has-feedback">
   <!-- <input type="text" class="form-control has-feedback-left" id="inputSuccess2" placeholder="N. Compte">-->
   {!! Form::label('ns_event_result', 'Resultat:') !!}
   {!! Form::text('ns_event_result',null, ['placeholder' => 'Resultat', 'class' => 'form-control has-feedback-left']) !!}

   <span class="fa fa-credit-card form-control-feedback left" aria-hidden="true"></span>
 </div>

 <div class="form-group col-xs-12 has-feedback">
  {!! Form::label('body', 'Decrire Evement:') !!}
  {!! Form::textarea('ns_event_detail', null, ['class'=>'form-control'])!!}
</div>


</div>
</div>
</div>
<div class="well">
  <div class="col-md-12 col-sm-12 col-xs-12">
    <div class="card-body row">
      <div class="col-md-6 col-xs-8 form-group has-feedback">
       <!-- <input type="text" class="form-control" id="inputSuccess5" placeholder="Phone">-->
       {!! Form::submit('Update Post', ['class'=>'btn btn-primary col-sm-6']) !!}
       {!! Form::close() !!}
     </div>

     <div class="col-md-6 col-xs-8 form-group has-feedback">
      {!! Form::open(['method'=>'DELETE', 'action'=> ['AdminPostsController@destroy', $post->id]]) !!}
      {!! Form::submit('Delete Post', ['class'=>'btn btn-danger col-sm-6']) !!}
      {!! Form::close() !!}
    </div>
  </div>
</div>
<div class="row">
  @include('includes.form_error')
</div>
@stop