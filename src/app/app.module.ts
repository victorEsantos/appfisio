import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListarTodosPacientesCompComponent } from './listar-todos-pacientes-comp/listar-todos-pacientes-comp.component';
import {HttpClientModule} from "@angular/common/http";
import { CadastrarPacientesCompComponent } from './cadastrar-pacientes-comp/cadastrar-pacientes-comp.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarTodosPacientesCompComponent,
    CadastrarPacientesCompComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
