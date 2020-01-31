<?php

namespace App\Http\Controllers;

use App\Tipos;
use Illuminate\Http\Request;

class TiposController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tipo = Tipos::get();
        echo Json_encode($tipo); 
    }

  

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required'
        ]);

       
            //POner la regras(rules)
        $tipo = Tipos::create($request->all());

        return response()->json([
            'message' => 'tipo cadastrada',
            'name' => $tipo->name
        ]);
       
    }



 

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tipos  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        
        $request->validate([
            'name' => 'required'
        ]);
        $tipo = Tipos::findOrFail($id);
        $name = $request->all();
            
        $tipo->update($name);
      
        
        return response()->json([
            'message' => 'actualizado exitosamente',
            'name' => $name
        ]);  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tipos  $tipos
     * @return \Illuminate\Http\Response
     */
    public function destroy($tipo_id)
    {

        var_dump($tipo_id);
        $tipo = Tipos::find($tipo_id);
        
         $tipo->delete();
      
        
        return response()->json([
            'message' => 'borrado exitosamente',
            'name' =>$tipo_id
        ]);   
    }
}
