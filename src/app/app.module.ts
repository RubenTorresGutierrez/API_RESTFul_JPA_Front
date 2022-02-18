import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { TablaComponent } from './components/shared/tabla/tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesComponent,
    UsuariosComponent,
    TablaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
