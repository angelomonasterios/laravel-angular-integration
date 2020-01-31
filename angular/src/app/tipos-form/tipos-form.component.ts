import { Component, OnInit } from '@angular/core';
import { Tipos } from '../interface/tipos';
import { TiposService } from '../services/tipos.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tipos-form',
  templateUrl: './tipos-form.component.html',
  styleUrls: ['./tipos-form.component.scss']
})
export class TiposFormComponent implements OnInit {
    tipo: Tipos = {
      name: null
    };

    id: any;
    editing = false;
    tipos:Tipos[];
  constructor(private tipoService: TiposService, private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params['id'];
    
    if (this.id) {
      this.tipoService.get().subscribe((data:Tipos[])=>{
        
        this.tipos = data;
        this.tipo = this.tipos.find((p) => {return p.id == this.id});
        

      });
  this.editing = true;
      
    }else{
      this.editing = false;
    }

  }

  ngOnInit() {
  }
  saveTipo()
  {

    if (this.editing ) {
      this.tipoService.put(this.tipo).subscribe((data) => {
        console.log(data);
        alert('Tipo actualizada');
      }, (error) => {
        console.log(error);
        alert('error al insertar');
  
  
      });
    } else {
      this.tipoService.save(this.tipo).subscribe((data) => {
        console.log(data);
        alert('Tipo guardado');
      }, (error) => {
        console.log(error);
        alert('error al insertar');
  
  
      }); 
      this.tipo.name = null;
    }
   
    
  }
}
