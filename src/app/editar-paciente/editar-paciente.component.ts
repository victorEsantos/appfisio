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
  public avaliacoes: any;
  public nome: string = " ";

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

  onSubmit(isLastStep?: boolean): void {
    this.submitted = true;

    const id = this.location.path().split("/")[3];

    if (this.form.valid) {
      this.service.update(this.form.value, id).subscribe(
        () => {
          console.log("Criado com sucesso!")
          if(isLastStep){
            this.location.back();
          }
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

    if (this.isVisualizar()) {
      this.form.disable();
    }

    this.route.params.subscribe(
      (params: any) => {
        const id = params['id'];
        this.service.getPacienteById(id).subscribe(
          (paciente) => {
            this.form.patchValue(paciente);
            this.form.patchValue({convenio: paciente.convenio?.nome});
            this.nome = paciente.nome;
          }
        );

        this.service.getPacienteAvaliacoes(id).subscribe(data => {
          this.avaliacoes = data.content;
        })

      }
    )

  }

  public isVisualizar(): boolean {
    return this.location.path().includes("visualizar");
  }

  hasError(field: string) {
    return this.form.get(field)?.errors

  }

  truncateString(str: string, length: number): string {
    if (str.length > length) {
      return str.substring(0, length) + "...";
    }
    return str;
  }
}
