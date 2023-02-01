import {Component, OnInit} from '@angular/core';
import {PacienteService} from "../paciente.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listar-todos-pacientes-comp',
  templateUrl: './listar-todos-pacientes-comp.component.html',
  styleUrls: ['./listar-todos-pacientes-comp.component.css']
})
export class ListarTodosPacientesCompComponent implements OnInit{

  pacientes: any[] = [];

  constructor(private pacienteService: PacienteService, private router: Router) {
  }

  ngOnInit(): void {
    this.pacienteService.getAllPacientes().subscribe(data => {
      this.pacientes = data.content;

      console.log(">>>>>", data.content)
    })
  }

  novoPaciente() {
    this.router.navigate(['pacientes/novo'])
  }

  vizualizarPaciente(id: string) {
    this.router.navigate(['pacientes', id])
  }

  editarPaciente(id: string) {
    this.router.navigate(['pacientes/editar', id])
  }
}
