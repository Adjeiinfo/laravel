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
        'department_id'

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

    public function department(){
        return $this->belongsTo('App\Department');
    }

    public function comments(){
        return $this->hasMany('App\Comment');
    }

    public function statuts(){
        return $this->belongsTo('App\Statut');
    }

    public function photoPlaceholder(){
        return "http://placehold.it/700x200";
    }


}
