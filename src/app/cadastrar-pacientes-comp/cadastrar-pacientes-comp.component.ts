import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PacienteService} from "../paciente.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-cadastrar-pacientes-comp',
  templateUrl: './cadastrar-pacientes-comp.component.html',
  styleUrls: ['./cadastrar-pacientes-comp.component.css']
})
export class CadastrarPacientesCompComponent implements OnInit {

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
    endereco: this.fb.group({
      cep: [],
      estado: [],
      cidade: [],
      numero: [],
      bairro: [],
      complemento: []
    })
  });

  submitted: boolean = false;

  constructor(private fb: FormBuilder, private service: PacienteService,
              private location: Location) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;

    console.log(this.form.value)

    if (this.form.valid) {
      console.log("criando paciente")
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
