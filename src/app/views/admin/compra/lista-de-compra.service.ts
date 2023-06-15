import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ListaDeCompra } from './listaDeCompra.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {
  baseUrl: String = "http://localhost:8080/lista/compra";

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  buscarTodasListasDeCompra(): Observable<ListaDeCompra[]> {
    const url = `${this.baseUrl}`;
    return this.http.get<ListaDeCompra[]>(url);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000
    })
  }
  
}
