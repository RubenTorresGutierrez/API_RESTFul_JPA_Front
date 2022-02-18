import { Injectable } from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  #urlEndPoint: string = 'http://localhost:8080/api/usuarios';

  #usuarios:any[] = [];

  constructor(private http:HttpClient) { }

  getAll(): void{
    this.http.get(this.#urlEndPoint).subscribe((respuesta:any) => this.#usuarios=respuesta)
  }

  getById(id:number): Observable<Object>{
    return this.http.get(`${this.#urlEndPoint}/${id}`).pipe(map(respuesta => respuesta as Object[]))
  }

  delete(id:number):void{
    this.http.delete(`${this.#urlEndPoint}/${id}`).subscribe(
      respuesta =>{
      this.getAll()
    },error => {
      console.log("Error al borrar el usuario:" + error.status)
    })
  }

  save(usuario:Object):void{
    this.http.post(`${this.#urlEndPoint}`,usuario).subscribe((respuesta:any)=> this.#usuarios.push(respuesta))
  }

  get usuarios():any[]{
    return this.#usuarios
  }
}
