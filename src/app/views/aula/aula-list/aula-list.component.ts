import { Component, OnInit } from '@angular/core';
import { Aula } from '../aula.model';
import { AulaService } from '../aula.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/security/_services/user.service';
import { StorageService } from 'src/app/security/_services/storage.service';

@Component({
  selector: 'app-aula-list',
  templateUrl: './aula-list.component.html',
  styleUrls: ['./aula-list.component.css']
})
export class AulaListComponent implements OnInit {

  aulas: Aula[] = [];
  aulasPorUsuario: Aula[] = [];
  displayedColumns: string[] = [ 'descricao', 'nomeUsuario', 'nomeDisciplina', 'nomeLaboratorio', 'dataUtilizacao', 'valor', 'acoes'];

  idUsuario!: String;

  constructor(private service: AulaService, private router: Router, private usuarioService: StorageService) { }

  ngOnInit(): void {
    this.idUsuario! = this.usuarioService.getUser().id;
    this.buscarAulasPorUsuario(this.idUsuario);
    this.buscarTodasAulas();
  }

  buscarTodasAulas() {
    this.service.buscarTodasAulas().subscribe(resposta => {
      this.aulas = resposta;
    })
  }

  buscarAulasPorUsuario(idUsuario: String) {
    this.service.buscarAulasPorUsuario(idUsuario).subscribe(resposta => {
      this.aulasPorUsuario = resposta;
    });
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
