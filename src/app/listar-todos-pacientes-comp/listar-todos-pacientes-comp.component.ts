import {Component, OnInit} from '@angular/core';
import {PacienteService} from "../paciente.service";
import {Router} from "@angular/router";
import {Paciente} from "../models/paciente-model";

@Component({
  selector: 'app-listar-todos-pacientes-comp',
  templateUrl: './listar-todos-pacientes-comp.component.html',
  styleUrls: ['./listar-todos-pacientes-comp.component.css']
})
export class ListarTodosPacientesCompComponent implements OnInit{

  pacientes: Paciente[] = [];

  constructor(private pacienteService: PacienteService, private router: Router) {
  }

  ngOnInit(): void {
    this.pacienteService.getAllPacientes().subscribe(data  => {
      console.log(data.content);
      this.pacientes = data.content;
    })
  }

  novoPaciente() {
    this.router.navigate(['pacientes/novo'])
  }

  vizualizarPaciente(id: string) {
    this.router.navigate(['pacientes/visualizar', id])
  }

  editarPaciente(id: string) {
    this.router.navigate(['pacientes/editar', id])
  }

  excluirPaciente(id: string) {
    this.pacienteService.deletePaciente(id).subscribe(() => {
      this.pacientes = this.pacientes.filter(paciente => paciente.id !== id);
    })

  }
}
