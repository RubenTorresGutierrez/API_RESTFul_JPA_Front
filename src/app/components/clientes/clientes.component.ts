import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

// Services
import { Cliente, ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private _clientesService: ClientesService) { 

    this._clientesService.getAllCliente();

  }

  ngOnInit(): void {
  }

  deleteClientById(id: number){
    
    this._clientesService.deleteClienteById(id);

  }


  // Getters

  get Clientes(){

    return this._clientesService.Clientes;

  }

}
