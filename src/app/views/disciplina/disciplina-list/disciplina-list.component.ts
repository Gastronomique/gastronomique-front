import { Component, OnInit } from '@angular/core';
import { Disciplina } from '../disciplina.model';
import { DisciplinaService } from '../disciplina.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from '../../curso/curso.model';

@Component({
  selector: 'app-disciplina-list',
  templateUrl: './disciplina-list.component.html',
  styleUrls: ['./disciplina-list.component.css']
})
export class DisciplinaListComponent implements OnInit {

  constructor(
    private service: DisciplinaService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

  }
}
