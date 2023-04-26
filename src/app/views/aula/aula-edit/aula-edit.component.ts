import { Component, OnInit } from '@angular/core';
import { Aula } from '../aula.model';
import { Usuario } from '../usuario.model';
import { Disciplina } from '../../disciplina/disciplina.model';
import { Laboratorio } from '../../laboratorio/laboratorio.model';
import { FormControl, Validators } from '@angular/forms';
import { AulaService } from '../aula.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LaboratorioService } from '../../laboratorio/laboratorio.service';
import { DisciplinaService } from '../../disciplina/disciplina.service';

@Component({
  selector: 'app-aula-edit',
  templateUrl: './aula-edit.component.html',
  styleUrls: ['./aula-edit.component.css']
})
export class AulaEditComponent implements OnInit {

  disciplinas: Disciplina[] = [];
  laboratorios: Laboratorio[] = [];

  aula: Aula = {
    descricao: '',
    usuario: new Usuario(),
    disciplina: new Disciplina(),
    laboratorio: new Laboratorio(),
    dataUtilizacao: '',
    valor: 0
  };

  disciplina = new FormControl(0, [Validators.required]);
  laboratorio = new FormControl(0, [Validators.required]);
  dataUtilizacao = new FormControl('', [Validators.required]);

  constructor(
    private service: AulaService,
    private laboratorioService: LaboratorioService,
    private disciplinaService: DisciplinaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.aula.id = this.route.snapshot.paramMap.get('id')!;
    this.buscarAulaPorId();
    this.buscarTodosLaboratorios();
    this.buscarTodasDisciplinas();
  }

  buscarAulaPorId(): void {
    this.service.buscarAulaPorId(this.aula.id!).subscribe((resposta => {
      this.aula.id = resposta.id;
      this.aula.descricao = resposta.descricao;
      this.aula.usuario = resposta.usuario;
      this.aula.disciplina = resposta.disciplina;
      this.aula.laboratorio = resposta.laboratorio;
      this.aula.dataUtilizacao = resposta.dataUtilizacao;
      this.aula.valor = resposta.valor;
    }));
  }

  buscarTodosLaboratorios() {
    this.laboratorioService.buscarTodosLaboratorios().subscribe(resposta => {
      this.laboratorios = resposta;
    });
  }

  buscarTodasDisciplinas() {
    this.disciplinaService.buscarTodasDisciplinas().subscribe(resposta => {
      this.disciplinas = resposta;
    })
  }

  editarAula(): void {
    this.service.editarAula(this.aula).subscribe((resposta) => {
      this.router.navigate(['aula/listagem']);
    });
  }

  cancelar(): void {
    this.router.navigate(['aula/listagem']);
  }
}
