import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Aula } from 'src/app/views/aula/aula.model';
import { AulaService } from 'src/app/views/aula/aula.service';

@Component({
  selector: 'app-gerar-lista',
  templateUrl: './gerar-lista.component.html',
  styleUrls: ['./gerar-lista.component.css']
})
export class GerarListaComponent implements OnInit {

  aulasPorPeriodo: Aula[] = [];
  displayedColumns: string[] = [ 'check','descricao', 'nomeUsuario', 'nomePregao', 'nomeDisciplina', 'nomeLaboratorio', 'dataUtilizacao', 'valor', 'status'];

  idUsuario!: String;

  constructor(
    private service: AulaService,
    private router: Router
  ) { }

  ngOnInit(): void {}

  buscarAulasPorPeriodo() {
    const dataInicial = document.getElementById("dataInicial") as HTMLInputElement;
    const dataFinal = document.getElementById("dataFinal") as HTMLInputElement;
    this.service.buscarAulasPorPeriodo(dataInicial.value, dataFinal.value).subscribe(resposta => {
      this.aulasPorPeriodo = resposta;
    })
  }

  excluirAula(id: string) {
    this.router.navigate([`aula/excluir/${id}`]);
  }

  editarAula(id: string) {
    this.router.navigate([`aula/editar/${id}`]);
  }

  novaAula() {
    this.router.navigate(['aula/inserir']);
  }

  listarItensAula(idAula: String) {
    this.router.navigate([`aula/itens/${idAula}`]);
  }

  formatarData(data: any): any {
    const partes = data.split('-');
    const dataInvertida = partes.reverse().join('/');
    return dataInvertida;
  }
}
