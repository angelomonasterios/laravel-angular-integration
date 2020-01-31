<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Marca extends Model
{
    protected $table = 'marcas';
    protected $fillable = [
        'id',
        'name',                   
        'tipos_id'
                        ];  
                       

public function tipos()
{
    return $this->hasMany('App\Tipos','id', 'tipos_id');
}
}
