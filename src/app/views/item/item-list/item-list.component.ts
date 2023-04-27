import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itens: Item[] = [];
  displayedColumns: string[] = ['insumo', 'quantidade', 'unidade', 'observacao'];

  constructor(private service: ItemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarItensAula(this.route.snapshot.paramMap.get('id')!);
  }

  buscarItensAula(idAula: String) {
    this.service.buscarItensAula(idAula).subscribe((json) => {
      this.itens = json;
    })
  }
/**
  excluirCurso(id: string) {
    this.router.navigate([`curso/excluir/${id}`]);
  }

  editarCurso(id: string) {
    this.router.navigate([`curso/editar/${id}`]);
  }

  novoCurso() {
    this.router.navigate(['curso/inserir']);
  }

  listarDisciplinasPorCursoId(id: string) {
    this.router.navigate([`disciplina/curso/${id}`]);
  }*/
}
