import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ClientesComponent } from "./components/clientes/clientes.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import {FormUsuarioComponent} from "./components/form-usuario/form-usuario.component";
import {FormClienteComponent} from "./components/form-cliente/form-cliente.component";

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/form',component:FormUsuarioComponent},
  { path: 'clientes/form',component:FormClienteComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
