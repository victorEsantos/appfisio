import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PacienteService} from "../paciente.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent {

  constructor(private fb: FormBuilder, private service: PacienteService,
              private location: Location) {
  }

  submitted: Boolean = false;

  form: FormGroup = this.fb.group({
    nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    sobrenome: [],
    cpf: [],
    rg: [],
    celular: [],
    telefone: [],
    profissao: [],
    email: [null, [Validators.required, Validators.email]]
  });

  onSubmit(): void {
    this.submitted = true;

    console.log(this.form.value)

    if (this.form.valid) {
      this.service.create(this.form.value).subscribe(
        () => {
          // this.modal.showAlertSuccess("Criado com sucesso!");

          console.log("Criado com sucesso!")

          this.location.back();
        },
        () => {
          // this.modal.showAlertDanger("Erro ao criar, tente novamente")
          console.log("erro ao criar, tente novamente")
        },
        () => console.log("request completado")
      );
    }
  }

  hasError(field: string) {
    return this.form.get(field)?.errors

  }
}
