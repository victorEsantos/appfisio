import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarTodosPacientesCompComponent} from "./listar-todos-pacientes-comp/listar-todos-pacientes-comp.component";
import {CadastrarPacientesCompComponent} from "./cadastrar-pacientes-comp/cadastrar-pacientes-comp.component";
import {EditarPacienteComponent} from "./editar-paciente/editar-paciente.component";

const routes: Routes = [
  {
    path: 'pacientes',
    component: ListarTodosPacientesCompComponent
  },
  {
    path: 'pacientes/novo',
    component: CadastrarPacientesCompComponent
  },
  {
    path: 'pacientes/editar/:id',
    component: EditarPacienteComponent
  },
  {
    path: 'pacientes/visualizar/:id',
    component: EditarPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
