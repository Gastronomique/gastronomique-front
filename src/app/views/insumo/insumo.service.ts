import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Insumo } from './insumo.model';

@Injectable({
  providedIn: 'root'
})
export class InsumoService {

  baseUrl: String = "http://localhost:8080/insumos";

  constructor(private http: HttpClient) { }

  buscarTodosInsumos(): Observable<Insumo[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<Insumo[]>(url);
  }

  buscarInsumoPorId(id: String): Observable<Insumo> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Insumo>(url);
  }

  inserirInsumo(insumo: Insumo): Observable<Insumo> {
    const url = `${this.baseUrl}`;
    return this.http.post<Insumo>(url, insumo);
  }

  editarInsumo(insumo: Insumo): Observable<void> {
    const url = `${this.baseUrl}/${insumo.id}`;
    return this.http.put<void>(url, insumo);
  }

  excluirInsumo(id: String): Observable<void> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<void>(url);
  }

}
