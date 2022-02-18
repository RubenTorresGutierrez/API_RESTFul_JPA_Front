import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  // Attributes
  #endpoint: string = 'http://localhost:8080/api/clientes';
  #clientes: Object[] = [];


  constructor(private http: HttpClient) { }

  // Methods

  /**
   * 
   * @returns 
   */
  getAllCliente(){

    this.http.get(this.#endpoint)
      .subscribe((data: any) => {
        this.#clientes = data;
        // console.log(this.#clientes);        
      });

  }

  getClienteById(id: number){

    this.http.get(`${this.#endpoint}/${id}`)
      .subscribe((data: any) => {
        this.#clientes = data;
        console.log(this.#clientes);        
      });

  }

  postCliente(id: number){

    this.http.get(`${this.#endpoint}/${id}`)
      .subscribe((data: any) => {
        this.#clientes = data;
        console.log(this.#clientes);        
      });

  }

  updateClienteById(id: number){

    this.http.get(`${this.#endpoint}/${id}`)
      .subscribe((data: any) => {
        this.#clientes = data;
        console.log(this.#clientes);        
      });

  }

  deleteClienteById(id: number){

    this.http.get(`${this.#endpoint}/${id}`)
      .subscribe((data: any) => {
        this.#clientes = data;
        console.log(this.#clientes);        
      });

  }

  // Getters
  get Clientes(): any[]{
    
    return this.#clientes;

  }

}
