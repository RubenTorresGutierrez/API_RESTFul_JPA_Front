import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import {FormUsuarioComponent} from "./components/form-usuario/form-usuario.component";
import {FormsModule} from "@angular/forms";
import { FormClienteComponent } from './components/form-cliente/form-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    UsuariosComponent,
    FormUsuarioComponent,
    FormClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
