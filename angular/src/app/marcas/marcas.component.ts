import { Component, OnInit } from '@angular/core';
import { MarcasService } from '../services/marcas.service';
import { HttpClient } from '@angular/common/http';
import { Marcas } from '../interface/marcas';
@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.scss']
})
export class MarcasComponent implements OnInit {

  API_ENDPOINT = 'http://127.0.0.1:8000/api/';
  marcas: Marcas[];
  constructor(private MarcasService: MarcasService, httpClient: HttpClient) {

    this.getTipos();



  }

  getTipos() {
    this.MarcasService.get().subscribe((data: Marcas[]) => {
     
      this.marcas = data;
    });
  }

  delete(id) {
    if (confirm("Seguro?")) {
      this.MarcasService.delete(id).subscribe((data) => {
        console.log(data);
        alert('apagado con exito');

      }, (error) => {
        console.log(error);

      });
      alert('apagado con exito');
      this.getTipos();
    }

  }
  ngOnInit() {
  }

}
