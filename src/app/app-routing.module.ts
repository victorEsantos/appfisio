import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListarTodosPacientesCompComponent} from "./listar-todos-pacientes-comp/listar-todos-pacientes-comp.component";

const routes: Routes = [
  {
    path: 'pacientes',
    component: ListarTodosPacientesCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
