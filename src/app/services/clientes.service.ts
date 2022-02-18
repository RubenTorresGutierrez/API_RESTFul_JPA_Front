import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

// Interfaces
export interface Cliente{
  id: number | null;
  nombre: string,
  apellido: string,
  email: string,
  createdAt?: Date
}

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
        console.log(this.#clientes[0]);
        this.#clientes[0]
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
    
    this.http.delete(`${this.#endpoint}/${id}`)
      .subscribe((data: any) => {
        this.getAllCliente();
      }, (error) =>{
        console.log(error);
      });

  }


  // Getters

  get Clientes(): any[]{
    
    return this.#clientes;

  }

}
