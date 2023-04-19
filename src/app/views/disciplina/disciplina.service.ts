import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Disciplina } from './disciplina.model';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {

  baseUrl: String = "http://localhost:8080/disciplinas";

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  buscarTodosCursosPorDisciplina(id: string): Observable<Disciplina[]> {
    const url = `${this.baseUrl}/cursos/${id}`;
    return this.http.get<Disciplina[]>(url);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}
