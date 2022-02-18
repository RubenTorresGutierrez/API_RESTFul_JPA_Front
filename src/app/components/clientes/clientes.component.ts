import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

// Services
import { ClientesService } from '../../services/clientes.service';
// Components
import { TablaComponent } from '../shared/tabla/tabla.component';

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

  get Clientes(){

    return this._clientesService.Clientes;

  }

}
