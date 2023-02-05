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

  submitted: boolean = false;

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
    convenio: this.fb.group({
      nome: [],
      numero: [],
      validade: [],
      convenio: [],
      numeroCns: []
    }),
    endereco: this.fb.group({
      cep: [],
      estado: [],
      cidade: [],
      numero: [],
      bairro: [],
      complemento: []
    })
  });

  onSubmit(): void {
    this.submitted = true;

    console.log(this.form.value)

    const id = this.location.path().split("/")[3];

    if (this.form.valid) {
      this.service.update(this.form.value, id).subscribe(
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
            this.form.patchValue({convenio: paciente.convenio?.nome});
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
