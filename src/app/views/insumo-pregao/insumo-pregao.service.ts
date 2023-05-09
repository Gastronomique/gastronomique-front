import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { InsumoPregao } from './insumo-pregao.model';

@Injectable({
  providedIn: 'root'
})
export class InsumoPregaoService {
  
  baseUrl: String = "http://localhost:8080/pregao/insumos";

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  buscarInsumosDoPregao(idPregao: String): Observable<InsumoPregao[]> {
    const url = `${this.baseUrl}/${idPregao}`;
    return this.http.get<InsumoPregao[]>(url);
  }

  inserirInsumoNoPregao(insumoPregao: InsumoPregao): Observable<InsumoPregao> {
     const url = `${this.baseUrl}`;
     return this.http.post<InsumoPregao>(url, insumoPregao);
  }

  excluirInsumoDoPregao(idPregao: String): Observable<void> {
     const url = `${this.baseUrl}/${idPregao}`;
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
