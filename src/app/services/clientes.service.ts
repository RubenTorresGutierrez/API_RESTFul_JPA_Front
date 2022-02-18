import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // Attributes
  #urlBase: string = 'http://localhost:8080/api/clientes';

  constructor(private http: HttpClient) { }

}
