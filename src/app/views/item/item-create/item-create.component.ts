import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { Aula } from '../../aula/aula.model';
import { Insumo } from '../../insumo/insumo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';
import { InsumoService } from '../../insumo/insumo.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  insumos!: Insumo[];

  itemAula: Item = {
    id: '',
    aula: new Aula(),
    insumo: new Insumo(),
    quantidade: 0,
    observacao: '',
    valor: 0
  };

  insumoAula = new FormControl(0, [Validators.required]);
  quantidade = new FormControl(0, [Validators.required]);

  constructor(
    private service: ItemService,
    private insumoService: InsumoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  idAula = this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.itemAula.aula.id = this.idAula!;
    this.buscarTodosInsumos();
  }

  inserirItemAula(): void {
    this.service.inserirItemAula(this.itemAula).subscribe(
      () => {
        this.router.navigate([`aula/itens/${this.idAula}`]);
        this.service.mensagem("Item inserido na aula com sucesso!");
      }, err => {
        this.service.mensagem("Problema ao inserir item na aula, verifique os campos do formulário!");
      }
    );
  }

  buscarTodosInsumos() {
    this.insumoService.buscarTodosInsumos().subscribe((resposta) => {
      this.insumos = resposta;
    })
  }

  cancelar(): void { this.router.navigate([`aula/itens/${this.idAula}`]); }
}
