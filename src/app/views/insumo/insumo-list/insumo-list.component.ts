import { Insumo } from './../insumo.model';
import { Router } from '@angular/router';
import { InsumoService } from '../insumo.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-insumo-list',
  templateUrl: './insumo-list.component.html',
  styleUrls: ['./insumo-list.component.css']
})

export class InsumoListComponent implements AfterViewInit, OnInit {

  insumos: Insumo[] = [];
  termoDePesquisa: String = "";
  pageIndex = 0;
  pageSize = 0;
  totalItems = 0;

  displayedColumns: string[] = ['id', 'denominacao', 'unidadeDeMedida', 'descricao', 'tipoInsumo', 'acoes'];
  dataSource = new MatTableDataSource<Insumo>(this.insumos);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private service: InsumoService
  ) {}

  ngOnInit(): void {
    this.buscarTodosInsumosPageable();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: PageEvent) {
    this.service.buscarTodosInsumosPageable(this.pageIndex, this.pageSize).subscribe((resposta) => {
      this.insumos = resposta.content;
      this.totalItems = resposta.totalElements;
      this.dataSource = new MatTableDataSource<Insumo>(this.insumos);
      this.dataSource.paginator = this.paginator;
    });
  }

  buscarTodosInsumosPageable() {
    this.service.buscarTodosInsumosPageable(0, 5).subscribe((resposta => {
      this.insumos = resposta.content;
      this.totalItems = resposta.totalElements;
      this.dataSource = new MatTableDataSource<Insumo>(this.insumos);
    }));
  }

  excluirInsumo(id: string) {
    this.router.navigate([`insumo/excluir/${id}`]);
  }

  editarInsumo(id: string) {
    this.router.navigate([`insumo/editar/${id}`]);
  }

  novoInsumo() {
    this.router.navigate(['insumo/inserir']);
  }

  aplicarFiltro(event: Event) {
    const valor = (event.target as HTMLInputElement).value;
    this.dataSource.filter = valor.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
