<?php

use Illuminate\Database\Seeder;

class tipos extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('tipos')->insert([
            'name' => 'pilsen'
        ]);
        DB::table('tipos')->insert([
            'name' => 'dark'
        ]);
        DB::table('tipos')->insert([
            'name' => 'ligh'
        ]);
        DB::table('marcas')->insert([
            'name' => 'brama',
            'tipos_id'=> 1
        ]);
        DB::table('marcas')->insert([
            'name' => 'itaipava',
            'tipos_id'=> 2
        ]);
        DB::table('marcas')->insert([
            'name' => 'corona',
            'tipos_id'=> 3
        ]);

        
    }
}
