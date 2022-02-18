import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

export interface Usuario{
  id:number | null;
  username:string,
  password:string,
  email:string,
  createdAt?:Date
  activo?:boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  #urlEndPoint: string = 'http://localhost:8080/api/usuarios';

  #usuarios:Usuario[] = [];

  constructor(private http:HttpClient) { }

  getAll(): void{
    this.http.get(this.#urlEndPoint).subscribe((respuesta:any) => this.#usuarios=respuesta)
  }

  getById(id:number): Observable<Object>{
    return this.http.get(`${this.#urlEndPoint}/${id}`).pipe(map(respuesta => respuesta as Usuario))
  }

  delete(id:number):void{
    this.http.delete(`${this.#urlEndPoint}/${id}`).subscribe(
      respuesta =>{
      this.getAll()
    },error => {
      console.log("Error al borrar el usuario:" + error.status)
    })
  }

  add(usuario:Usuario):void{
    this.http.post(`${this.#urlEndPoint}`,usuario).subscribe((respuesta:any)=> this.#usuarios.push(respuesta))
  }

  update(usuario:Usuario):void{
    this.http.put(`${this.#urlEndPoint}/${usuario.id}`,usuario).subscribe((respuesta:any)=> this.getAll())
  }

  get usuarios():any[]{
    return this.#usuarios
  }
}
