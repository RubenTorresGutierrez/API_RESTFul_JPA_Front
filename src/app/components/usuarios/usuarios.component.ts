import { Component, OnInit } from '@angular/core';
import {UsuariosService} from "../../services/usuarios.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private usuariosService:UsuariosService) {
    usuariosService.getAll();
  }


  ngOnInit(): void {
  }

  get usuarios(){
    return this.usuariosService.usuarios;
  }

  borrar(id:number){
    this.usuariosService.delete(id)
  }

}
