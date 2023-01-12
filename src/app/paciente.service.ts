import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, take} from "rxjs";

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

}
