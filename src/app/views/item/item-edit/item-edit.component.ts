import { Component, Input, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { InsumoService } from '../../insumo/insumo.service';
import { InsumoPregaoService } from '../../insumo-pregao/insumo-pregao.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AulaService } from '../../aula/aula.service';
import { Item } from '../item.model';
import { Aula } from '../../aula/aula.model';
import { Insumo } from '../../insumo/insumo.model';
import { FormControl, Validators } from '@angular/forms';
import { InsumoPregao } from '../../insumo-pregao/insumo-pregao.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  aula!: Aula;

  insumoPregao!: InsumoPregao;

  insumos!: Insumo[];

  itemAula: Item = {
    id: '',
    aula: new Aula(),
    insumo: new Insumo(),
    quantidade: 0,
    observacao: '',
    valorUnitario: 0,
    valorTotal: 0
  }

  insumo = new FormControl('', [Validators.required]);
  quantidade = new FormControl('', [Validators.required]);
  valorUnitario = new FormControl('', [Validators.required]);

  constructor(
    private service: ItemService,
    private insumoService: InsumoService,
    private insumoPregaoService: InsumoPregaoService,
    private aulaService: AulaService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const itemAulaId = this.route.snapshot.paramMap.get('id')!;
    this.buscarItemAulaPorId(itemAulaId);
  }

  buscarItemAulaPorId(itemAulaId: String): void {
    this.service.buscarItemAulaPorId(itemAulaId).subscribe(( (resposta) => {
      this.itemAula = resposta;
    }));
  }

  buscarAulaPorId(aulaId: String) {
    this.aulaService.buscarAulaPorId(aulaId).subscribe(resposta => {
      this.aula = resposta;
    });
  }

  buscarInsumosPorPregao(idPregao: String) {
    this.insumoService.buscarInsumosPorPregao(idPregao).subscribe((resposta) => {
      this.insumos = resposta;
    });
  }

  setValorItem(idInsumo: String) {
    this.insumoPregaoService.listarUltimoPreco(idInsumo).subscribe(resposta => {
      this.insumoPregao = resposta;
      this.itemAula.valorUnitario = resposta.preco;
    });
  }

  editarItemAula(): void {
    this.service.editarItemAula(this.itemAula).subscribe(() => {
      this.router.navigate([`aula/itens/${this.itemAula.aula.id}`]);
    });
  }

  cancelar(): void {
    this.router.navigate([`aula/itens/${this.itemAula.aula.id}`]);
  }
}
