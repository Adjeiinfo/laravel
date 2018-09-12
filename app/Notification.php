<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    //
     protected $fillable = [

        'post_id',
        'author',
        'email',
        'body',
        'is_active'
    ];

     public function post(){
        return $this->belongsTo('App\Post');
    }

}
