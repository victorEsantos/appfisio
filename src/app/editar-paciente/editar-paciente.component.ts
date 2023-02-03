import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PacienteService} from "../paciente.service";
import {Location} from "@angular/common";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  constructor(private fb: FormBuilder, private service: PacienteService,
              private location: Location,
              private route: ActivatedRoute) {
  }

  submitted: Boolean = false;

  form: FormGroup = this.fb.group({
    nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
    nascimento: [],
    sexo: [],
    cpf: [],
    rg: [],
    estadoCivil: [],
    profissao: [],
    email: [],
    telefoneFixo: [],
    celular: [],
    convenio: [],
    numeroCns: [],
    cep: [],
    estado: [],
    cidade: [],
    numero: [],
    bairro: [],
    complemento: []
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

  ngOnInit() {

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.service.getPacienteById(id).subscribe(
          (paciente) => {
            this.form.patchValue(paciente);
            console.log(">>>", paciente);
          }
        )
      }
    )


  }

  hasError(field: string) {
    return this.form.get(field)?.errors

  }
}
