import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina.model';
import { DisciplinaService } from '../disciplina.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.css']
})
export class DisciplinaListComponent implements OnInit {

  disciplinas: Disciplina[] = [];
  displayedColumns: string[] = ['id', 'nome', 'acoes'];
  nomeCurso!: string;

  constructor(private service: DisciplinaService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.nomeCurso = this.route.snapshot.paramMap.get('nomeCurso')!;
    this.buscarTodosCursosPorCursoId(this.route.snapshot.paramMap.get('id')!);
  }

  buscarTodosCursosPorCursoId(id: string) {
    this.service.buscarTodosCursosPorCursoId(id).subscribe(resposta => {
      this.disciplinas = resposta;
      console.log(resposta);
    })
  }

  excluirCurso(id: string) {
    this.router.navigate([`curso/excluir/${id}`]);
  }

  editarCurso(id: string) {
    this.router.navigate([`curso/editar/${id}`]);
  }

  novoCurso() {
    this.router.navigate(['curso/inserir']);
  }


}
