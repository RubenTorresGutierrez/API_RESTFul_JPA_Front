import { Component, OnInit } from '@angular/core';

// Components
import { TablaComponent } from '../shared/tabla/tabla.component';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
