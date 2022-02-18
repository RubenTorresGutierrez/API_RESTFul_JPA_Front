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
   * Obtiene todos clientes de la base de datos 
   */
  getAllCliente(){

    this.http.get(this.#endpoint)
      .subscribe((data: any) => {
        this.#clientes = data;
      });

  }

  /**
   * Obtiene un cliente mediante su id
   * 
   * @param id Identificador del cliente
   * @returns El objeto con los datos del cliente
   */
  getClienteById(id: number){

    return this.http.get(`${this.#endpoint}/${id}`);

  }

  /**
   * Envia un JSON para que se cree un nuevo cliente 
   * en la base de datos
   * 
   * @param cliente Objeto con los datos del cliente
   */
  postCliente(cliente: Cliente){

    this.http.post(this.#endpoint, cliente)
      .subscribe((data: any) => {
        this.getAllCliente();
      }, (error) =>{
        console.log(error);
      });

  }

  /**
   * Envia un JSON para que se actualicen los datos de 
   * un cliente en la base de datos
   * 
   * @param cliente Objeto con los datos del cliente
   */
  updateClienteById(cliente: Cliente){

    this.http.put(`${this.#endpoint}/${cliente.id}`, cliente)
      .subscribe((data: any) => {
        this.getAllCliente();
      }, (error) =>{
        console.log(error);
      });

  }

  /**
   * Elimina un cliente de la base de datos pasándole 
   * su identificador
   * 
   * @param id Identificador del cliente
   */
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
