import { Component, OnInit } from '@angular/core';
import { Item } from '../item.model';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  itens: Item[] = [];
  displayedColumns: string[] = ['insumo', 'quantidade', 'unidade', 'observacao', 'acoes'];
  idAula!: string;

  constructor(
    private service: ItemService,
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.idAula = this.route.snapshot.paramMap.get('id')!;
    this.buscarItensAula(this.route.snapshot.paramMap.get('id')!);
  }

  buscarItensAula(idAula: String) {
    this.service.buscarItensAula(idAula).subscribe((json) => {
      this.itens = json;
    })
  }

  excluirItemAulaDialog(idItemAula: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        message: 'Tem certeza que deseja excluir este item de aula?',
        buttonText: {
          ok: 'Sim',
          cancel: 'Cancelar'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.service.excluirItemAula(idItemAula).subscribe((resposta) => {
          window.location.reload();
        });
      }
    });
  }

  navegarParaInsercaoDeItens(): void {
    this.router.navigate([`aula/itens/inserir/${this.idAula}`]);
  }

  navegarParaListagemDeAulas(): void {
    this.router.navigate([`aula/listagem`]);
  }
}
