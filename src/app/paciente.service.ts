import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, take} from "rxjs";
import {Paciente} from "./models/paciente-model";

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  apiUrl = `${environment.API}pacientes`;
  httpOptions = {
    heeaders: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllPacientes(nome?: string): Observable<any> {
    let url = this.apiUrl;
    if (nome) {
      url = url + "?nome=" + nome;
    }
    return this.httpClient.get<any>(url).pipe(take(1));
  }

  public getPacienteById(id: string): Observable<Paciente> {
    return this.httpClient.get<any>(`${this.apiUrl}/${id}`).pipe(take(1));
  }

  public create(paciente: any) {
    return this.httpClient.post(this.apiUrl, paciente).pipe(take(1));
  }
}
