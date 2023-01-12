import {Component, OnInit} from '@angular/core';
import {PacienteService} from "../paciente.service";

@Component({
  selector: 'app-listar-todos-pacientes-comp',
  templateUrl: './listar-todos-pacientes-comp.component.html',
  styleUrls: ['./listar-todos-pacientes-comp.component.css']
})
export class ListarTodosPacientesCompComponent implements OnInit{

  pacientes: any[] = [];

  constructor(private pacienteService: PacienteService) {
  }

  ngOnInit(): void {
    this.pacienteService.getAllPacientes().subscribe(data => {
      this.pacientes = data.content;

      console.log(">>>>>", data.content)
    })
  }
}
