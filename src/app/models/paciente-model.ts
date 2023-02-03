export interface Paciente {
  id: string;
  nome: string;
  nascimento: Date;
  sexo: SexoEnum;
  cpf: string;
  rg: string;
  estadoCivil: string;
  profissao: string;
  email: string;
  telefoneFixo: string;
  celular: string;
  convenio: Convenio;
  numeroCns: string;
  endereco: Endereco;

}

export enum ConvenioEnum {
  BRADESCO,
  CASSI,
  MEDISERVICE,
  SAUDE_CAIXA,
  SC_SAUDE,
  UNIMED,
  LIFE_DAY,
  SAUDE_JOINVILLE,
  PARANA_CLINICAS,
  PARTICULAR

}

export interface Convenio {
  nome: string;
  numero: string;
  validade: Date;
  convenio: ConvenioEnum;
}

interface Endereco {
  cep: string;
  estado: string;
  cidade: string;
  endereco: string;
  numero: string;
  bairro: string;
  complemento: string;
}

export enum SexoEnum {
  MASCULINO,
  FEMININO,
  OUTRO
}
