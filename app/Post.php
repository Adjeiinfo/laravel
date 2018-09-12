<?php

namespace App;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\SluggableScopeHelpers;

class Post extends Model
{
    //

    use Sluggable;
    use SluggableScopeHelpers;
    protected $fillable = [
       'category_id',
       'photo_id',
       'title',
       'body',
       'user_id',
       'status_id',
       'department_id',
       'agence_id',
       'typeclient_id',
       'typecarte_id',
       'type_transaction_id',
       'typenotifications_id',
       'priority_id',
       'department_id',
       'nature_transaction_id',
       
       'ns_phone',
       'ns_date_transaction',
       'ns_event_detail',
       'ns_event_result',
       'ns_event_montant',
       'ns_resultid',
       'ns_event_place',
       'ns_nom_prenom',
       'ns_address_email',
       'ns_address_postale',
       'ns_signature',
       'ns_date_summission',
       'ns_date_survey',
       'ns_devices',
       'ns_latitude',
       'ns_longitude',
       'ns_compte_bancaire',
       'ns_complete_at',
       'ns_close_at',
      // 'ns_event',
     //
   ];
   public function sluggable()

   {

   // $val = 'ns_nom_prenom'.'ns_event_result';
    return [
        'slug' => [

            'source' => 'ns_nom_prenom'
        ]
    ];
}

public function user(){

    return $this->belongsTo('App\User');

}

public function photo(){

    return $this->belongsTo('App\Photo');
}


public function category(){
    return $this->belongsTo('App\Category');
}

public function status(){
    return $this->belongsTo('App\Status');
}

public function priority(){
    return $this->belongsTo('App\Priority');
}


public function department(){
    return $this->belongsTo('App\Department');
}

public function comments(){
    return $this->hasMany('App\Comment');
}

public function agence(){
    return $this->belongsTo('App\Agence');
}

public function typenotification(){
    return $this->belongsTo('App\typenotification');
}

public function type_transaction(){
    return $this->belongsTo('App\type_transaction');
}

public function typecarte(){
    return $this->belongsTo('App\typecarte');
}

public function typeclient(){
    return $this->belongsTo('App\typeclient');
}

/*public function statuts(){
    return $this->belongsTo('App\Statut');
}*/

public function nature_transaction(){
    return $this->belongsTo('App\nature_transaction');
}

public function photoPlaceholder(){
    return "http://placehold.it/700x200";
}


}
