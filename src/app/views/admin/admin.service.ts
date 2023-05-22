import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Usuario } from '../aula/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  baseUrl: String = "http://localhost:8080/admin";

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  ativarUsuario(usuario: Usuario) {
    const url = `${this.baseUrl}/ativar/usuario/${usuario.id}`;
    return this.http.put<void>(url, usuario);
  }

  desativarUsuario(usuario: Usuario) {
    const url = `${this.baseUrl}/desativar/usuario/${usuario.id}`;
    return this.http.put<void>(url, usuario);
  }

  tornarUsuarioAdmin(usuario: Usuario) {
    const url = `${this.baseUrl}/tornar/administrador/${usuario.id}`;
    return this.http.put<void>(url, usuario);
  }

  mensagem(str: String): void {
    this._snack.open(`${str}`, 'OK', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
