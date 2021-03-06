import {Component, OnInit} from '@angular/core';
import {Usuario, UsuariosService} from "../../services/usuarios.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styleUrls: ['./form-usuario.component.css']
})
export class FormUsuarioComponent implements OnInit {

  // Attributes
  #usuario: Usuario = {
    id:null,
    username:"",
    password:"",
    email:""
  }
  id: string | null = null

  constructor(private usuarioService: UsuariosService, private ruta: ActivatedRoute,private router:Router) {
    this.init()
  }

  ngOnInit(): void {
  }

  init() {
    this.id = this.ruta.snapshot.paramMap.get('id')
    if (this.id != null) {
      this.usuarioService.getById(parseInt(this.id)).subscribe((data:any) => this.#usuario=data)
    }
  }

  enviar(){
    if (this.id != null){
      this.usuarioService.update(this.#usuario)
    }
    else{
      this.usuarioService.add(this.#usuario)
    }
    this.router.navigate(['usuarios'])
  }


  // Getters

  get usuario(){
    return this.#usuario
  }

}
