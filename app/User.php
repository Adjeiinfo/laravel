<?php

namespace App;

use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 
        'email', 
        'password',
        'role_id',
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



    public function role(){

        return $this->belongsTo('App\Role');
    }

    public function photo(){
        return $this->belongsTo('App\Photo');
    }

    public function roles()
    {
        return $this->belongsToMany(Role::class);
    }



//    public function setPasswordAttribute($password){
//
//
//        if(!empty($password)){
//
//
//            $this->attributes['password'] = bcrypt($password);
//
//
//        }
//
//
//        $this->attributes['password'] = $password;
//
//
//
//
//    }


    public function isAdmin(){
        if($this->role->name  == "administrator" && $this->is_active == 1){
            return true;
        }
        return false;
    }

    public function isCentrale(){
        if($this->role->name  == "centrale" && $this->is_active == 1){
            return true;
        }
        return false;
    }
        public function isAgence(){
        if($this->role->name  == "agence" && $this->is_active == 1){
            return true;
        }
        return false;
    }
    public function isCompany(){
        if($this->role->name  == "company" && $this->is_active == 1){
            return true;
        }
        return false;
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




    /**
* @param string|array $roles
*/
public function authorizeRoles($roles)
{
  if (is_array($roles)) {
      return $this->hasAnyRole($roles) || 
             abort(401, 'This action is unauthorized.');
  }
  return $this->hasRole($roles) || 
         abort(401, 'This action is unauthorized.');
}
/**
* Check multiple roles
* @param array $roles
*/
public function hasAnyRole($roles)
{
  return null !== $this->roles()->whereIn('name', $roles)->first();
}
/**
* Check one role
* @param string $role
*/
public function hasRole($role)
{
  return null !== $this->roles()->where('name', $role)->first();
}

}
