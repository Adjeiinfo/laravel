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
     'status_id',
     'status_id',
     'department_id',
     'agence_id',

     'ns_user_type',
     'ns_phone',
     'ns_date_transaction',
     'ns_event_detail',
     'ns_event_result',
     'ns_event_montant',
     'ns_resultid',
     'ns_event_place',
     'ns_event_nature',
     'ns_nom_prenom',
     'ns_reclam_objet',
     'ns_carte_type',
     'ns_transaction_type',
     'ns_address_email',
     'ns_address_postale',
     'ns_signature',
     'ns_date_summission',
     'ns_date_survey',
     'ns_devices',
     'ns_latitude',
     'ns_longitude',
     'ns_notification_type',
     'ns_agence',
     'ns_compte_bancaire',
     'ns_complete_at',
     'ns_close_at',
     'ns_event',

     //
     'ns_priority',

 ];
 public function sluggable()

 {
    return [
        'slug' => [
            'source' => 'title'
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
    return $this->belongsTo('App\priority');
}


public function department(){
    return $this->belongsTo('App\Department');
}

public function comments(){
    return $this->hasMany('App\Comment');
}

public function agences(){
    return $this->belongsTo('App\Agence');
}


public function statuts(){
    return $this->belongsTo('App\Statut');
}

public function photoPlaceholder(){
    return "http://placehold.it/700x200";
}


}
