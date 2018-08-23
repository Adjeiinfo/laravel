<?php

namespace App;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array    

     */

    //use spatie
    use HasApiTokens, Notifiable;
    use HasRoles;
    protected $fillable = [
      'name', 
      'email', 
      'password',
        //'role_id',
      'photo_id',
      'is_active',
      '',
      'department_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
      'password', 'remember_token',
    ];

    public function photo(){
      return $this->belongsTo('App\Photo');
    }

    public function posts(){
        return $this->hasMany('App\Post');

    }

    public function getGravatarAttribute(){
        $hash = md5(strtolower(trim($this->attributes['email']))) . "?d=mm&s=";
        return "http://www.gravatar.com/avatar/$hash";
    }

    public function department(){
        return $this->belongsTo('App\Department');
    }

}