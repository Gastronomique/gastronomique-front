import { Component, OnInit } from '@angular/core';
import { Insumo } from '../insumo.model';
import { InsumoService } from '../insumo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insumo-create',
  templateUrl: './insumo-create.component.html',
  styleUrls: ['./insumo-create.component.css']
})
export class InsumoCreateComponent implements OnInit {

  insumo: Insumo = {
    denominacao: '',
    unidadeDeMedida: '',
    descricao: '',
    tipoInsumo: ''
  }

  constructor(
    private service: InsumoService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  inserirInsumo(): void {
    this.service.inserirInsumo(this.insumo).subscribe(
      (resposta) => {
        this.router.navigate(['insumo/listagem']);
        console.log(resposta);
      }
    );
  }

  cancelar(): void { this.router.navigate(['home']); }
}
