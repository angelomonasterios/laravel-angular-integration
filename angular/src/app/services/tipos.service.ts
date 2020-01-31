import { Injectable } from '@angular/core';
import { Tipos } from '../interface/tipos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TiposService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api/';
  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + 'tipos');

  }

  save(tipo: Tipos) {
    const HEADER = new HttpHeaders({ 'Content-Type': 'applicarion/json' });

    return this.httpClient.post(this.API_ENDPOINT + 'tipos', tipo, { headers: HEADER });
  }
  put(tipo: Tipos) {
    const HEADER = new HttpHeaders({ 'Content-Type': 'applicarion/json' });
    console.log(tipo.id);
    return this.httpClient.put(this.API_ENDPOINT + 'tipos/' + tipo.id, tipo, { headers: HEADER });

  }
  delete(id) {
    return this.httpClient.delete(this.API_ENDPOINT + 'tipos/' + id);
  }
}



