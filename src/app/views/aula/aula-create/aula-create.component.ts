import { Component, OnInit } from '@angular/core';
import { Aula } from '../aula.model';
import { Usuario } from '../usuario.model';
import { Disciplina } from '../../disciplina/disciplina.model';
import { Laboratorio } from '../../laboratorio/laboratorio.model';
import { FormControl, Validators } from '@angular/forms';
import { AulaService } from '../aula.service';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/security/_services/storage.service';
import { DisciplinaService } from '../../disciplina/disciplina.service';
import { LaboratorioService } from '../../laboratorio/laboratorio.service';

@Component({
  selector: 'app-aula-create',
  templateUrl: './aula-create.component.html',
  styleUrls: ['./aula-create.component.css']
})
export class AulaCreateComponent implements OnInit {

  aula: Aula = {
    descricao: '',
    usuario: new Usuario(),
    disciplina: new Disciplina(),
    laboratorio: new Laboratorio(),
    dataUtilizacao: new Date(),
    valor: 0
  };

  disciplinas: Disciplina[] = [];

  laboratorios: Laboratorio[] = [];

  descricao = new FormControl('', [Validators.required]);
  disciplina = new FormControl(0, [Validators.required]);
  dataUtilizacao = new FormControl(Date, [Validators.required]);

  constructor(
    private service: AulaService,
    private router: Router,
    private usuarioService: StorageService,
    private disciplinaService: DisciplinaService,
    private laboratorioService: LaboratorioService
  ) { }

  ngOnInit(): void {
    this.setUsuarioId();
    this.buscarTodasDisciplinas();
    this.buscarTodosLaboratorios();
  }

  inserirAula(): void {
    console.log(this.aula.disciplina.id);

    /*
    this.service.inserirAula(this.aula).subscribe(
      () => {
        this.router.navigate(['aula/listagem']);
        this.service.mensagem("Requisição feita com sucesso!");
      }, err => {
        this.service.mensagem("Problema ao fazer requisição, confira os campos do formulário!");
      }
    );
    */
  }

  setUsuarioId(): void {
    this.aula.usuario.id = this.usuarioService.getUser().id;
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

  cancelar(): void { this.router.navigate(['aula/listagem']); }
}
