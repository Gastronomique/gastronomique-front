import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Aula } from './aula.model';

@Injectable({
  providedIn: 'root'
})
export class AulaService {

  baseUrl: String = "http://localhost:8080/aulas";

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  buscarTodasAulas(): Observable<Aula[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Aula[]>(url);
  }

  buscarAulaPorId(id: String): Observable<Aula> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Aula>(url);
  }

  inserirAula(aula: Aula): Observable<Aula> {
    const url = `${this.baseUrl}`;
    return this.http.post<Aula>(url, aula);
  }

  editarAula(aula: Aula): Observable<void> {
    const url = `${this.baseUrl}/${aula.id}`;
    return this.http.put<void>(url, aula);
  }

  excluirAula(id: String): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}