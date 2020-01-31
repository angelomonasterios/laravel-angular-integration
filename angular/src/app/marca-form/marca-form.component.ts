import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MarcasService } from '../services/marcas.service';
import { Marcas } from '../interface/marcas';
import { Tipos } from '../interface/tipos';
import { TiposService } from '../services/tipos.service';


@Component({
  selector: 'app-marca-form',
  templateUrl: './marca-form.component.html',
  styleUrls: ['./marca-form.component.scss']
})
export class MarcaFormComponent implements OnInit {
  marca: Marcas = {
    id: null,
    name: null,
    tipos_id: null
  };
  tipos: Tipos[];
  tipo: any;
  id: any;
  editing = false;
  marcas: Marcas[];
  opcionSeleccionado: number;

  constructor(private marcasService: MarcasService, private activatedRoute: ActivatedRoute, private TiposService: TiposService) {
    this.getTipos();

    this.id = this.activatedRoute.snapshot.params['id'];
   

    if (this.id) {
      this.marcasService.get().subscribe((data: Marcas[]) => {
        console.log(data)
        this.marcas = data;
        this.marca = this.marcas.find((p) => { return p.id == this.id });
       

      });
      this.editing = true;

    } else {
      this.editing = false;
    }

  }
  getTipos() {
    this.TiposService.get().subscribe((data: Tipos[]) => {

      this.tipos = data;
    
    });
  }

  ngOnInit() {
  }

  saveMarca() {
  
    if (this.editing) {
      this.marcasService.put(this.marca).subscribe((data) => {
        console.log(data);
        alert('marca actualizada');
      }, (error) => {
        console.log(error);
        alert('error al insertar');


      });
    } else {
      this.marcasService.save(this.marca).subscribe((data) => {
        console.log(data);
        alert('marca guardada');
      }, (error) => {
        console.log(error);
        alert('error al insertar');


      });
      /* this.marca.name = null; */
    }


  }

  capturar() {

    console.log(this.marca.tipos_id);
  }


}
