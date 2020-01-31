<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tipos extends Model
{
    protected $table = 'tipos';
    protected $fillable = [
        'id',                   
        'name',
        
                        ]; 
}
