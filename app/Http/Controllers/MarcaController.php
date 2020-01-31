<?php

namespace App\Http\Controllers;

use App\Marca;
use Illuminate\Http\Request;

class MarcaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $marca =Marca::with('Tipos')->get();
        
        
        echo Json_encode($marca); 
       
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
            'name' => 'required',
            'tipos_id'=> 'required'

        ]);

       
            //POner la regras(rules)
        $marca = Marca::create($request->all());

        return response()->json([
            'message' => 'marca cadastrada',
            'marca' => $marca->name
        ]);
       
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Marca  $marca
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $request->validate([
            'name' => 'required'
        ]);
        $marca = Marca::findOrFail($id);
        $name = $request->all();
        $marca->update($name);
      
        
        return response()->json([
            'message' => 'actualizado exitosamente',
            'name' => $name
        ]);  
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Marca  $marca_id
     * @return \Illuminate\Http\Response
     */
    public function destroy($marca_id)
    {

        var_dump($marca_id);
        $marca = Marca::find($marca_id);
        
        $marca->delete();
      
        
        return response()->json([
            'message' => 'actualizado exitosamente',
            'name' =>$marca
        ]);  
    }
}
