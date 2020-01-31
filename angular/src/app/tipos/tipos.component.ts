import { Component, OnInit } from '@angular/core';
import { TiposService } from '../services/tipos.service';
import { HttpClient } from '@angular/common/http';
import { Tipos } from '../interface/tipos';

@Component({
  selector: 'app-tipos',
  templateUrl: './tipos.component.html',
  styleUrls: ['./tipos.component.scss']
})
export class TiposComponent implements OnInit {

  API_ENDPOINT = 'http://127.0.0.1:8000/api/';
  tipos: Tipos[];
  id:any;
  constructor(private TiposService: TiposService, httpClient: HttpClient) {

    this.getTipos();


  }

  getTipos() {
    this.TiposService.get().subscribe((data: Tipos[]) => {
    
      this.tipos = data;
    });
  }

  ngOnInit() {

  }
  delete(id) {
    if (confirm("Seguro?")) {
      this.TiposService.delete(id).subscribe((data) => {
        console.log(data);
        alert('apagado con exito');

      }, (error) => {
        console.log(error);

      });
      alert('apagado con exito');
      this.getTipos();
    }

  }
}
