import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { ClientesComponent } from "./components/clientes/clientes.component";
import { UsuariosComponent } from "./components/usuarios/usuarios.component";
import {FormUsuarioComponent} from "./components/form-usuario/form-usuario.component";

const routes: Routes = [
  { path: 'clientes', component: ClientesComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuario/form',component:FormUsuarioComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'clientes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
