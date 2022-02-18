import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from "../../services/clientes.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  // Attributes
  #cliente: Cliente = {
    id:null,
    nombre:"",
    apellido:"",
    email:""
  }
  id: string | null = null

  constructor(private _clienteService: ClientesService, private ruta: ActivatedRoute, private router: Router) { 

    this.init();

  }

  ngOnInit(): void {
  }

  init() {

    this.id = this.ruta.snapshot.paramMap.get('id');
    if (this.id) {
      this._clienteService.getClienteById(parseInt(this.id))
        .subscribe( (data: any) => this.#cliente = data );
    }

  }

  enviar(){

    if(this.id)
      this._clienteService.updateClienteById(this.#cliente);
    else this._clienteService.postCliente(this.#cliente);
    this.router.navigate(['clientes']);

  }


  // Getters

  get Cliente(){

    return this.#cliente;

  }

}
