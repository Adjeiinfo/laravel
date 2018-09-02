<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Agence extends Model
{
	protected $fillable = ['name'];

	public function posts(){

		return $this->hasMany('App\Post');
	}

	public function users(){

		return $this->hasMany('App\User');
	}
}
