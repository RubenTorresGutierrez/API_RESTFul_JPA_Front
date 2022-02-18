import { Component, OnInit } from '@angular/core';
import { Cliente, ClientesService } from "../../services/clientes.service";
import {ActivatedRoute} from "@angular/router";

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

  constructor(private _clienteService: ClientesService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
