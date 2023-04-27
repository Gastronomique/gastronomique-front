import { Component, OnInit } from '@angular/core';
import { Aula } from '../aula.model';
import { AulaService } from '../aula.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {

  aulas: Aula[] = [];
  displayedColumns: string[] = ['id', 'descricao', 'nomeUsuario', 'nomeDisciplina', 'nomeLaboratorio', 'dataUtilizacao', 'valor', 'acoes'];

  constructor(private service: AulaService, private router: Router) { }

  ngOnInit(): void {
    this.buscarTodasAulas();
  }

  buscarTodasAulas() {
    this.service.buscarTodasAulas().subscribe(resposta => {
      this.aulas = resposta;
      console.log(resposta);
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

}
