<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    //
     protected $fillable = [

        'post_id',
        'notification_to',
        'notification_type',
        'notification_nom_prenom',
        'body'
    ];

     public function post(){
        return $this->belongsTo('App\Post');
    }

}
