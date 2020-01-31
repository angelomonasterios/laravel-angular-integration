import { Injectable } from '@angular/core';
import { Marcas } from '../interface/marcas';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcasService {

  API_ENDPOINT = 'http://127.0.0.1:8000/api/';
  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'marcas');

  }

  save(marca: Marcas) {
    const HEADER = new HttpHeaders({ 'Content-Type': 'applicarion/json' });

    return this.httpClient.post(this.API_ENDPOINT + 'marcas', marca, { headers: HEADER });
  }
  put(marca: Marcas) {
    const HEADER = new HttpHeaders({ 'Content-Type': 'applicarion/json' });

    return this.httpClient.put(this.API_ENDPOINT + 'marcas/' + marca.id, marca, { headers: HEADER });

  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'marcas/' + id);
  }
}
