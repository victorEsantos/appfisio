import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarTodosPacientesCompComponent} from "./listar-todos-pacientes-comp/listar-todos-pacientes-comp.component";
import {CadastrarPacientesCompComponent} from "./cadastrar-pacientes-comp/cadastrar-pacientes-comp.component";

const routes: Routes = [
  {
    path: 'pacientes',
    component: ListarTodosPacientesCompComponent
  },
  {
    path: 'pacientes/novo',
    component: CadastrarPacientesCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
