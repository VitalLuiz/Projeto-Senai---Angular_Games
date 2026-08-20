import { Component, inject, OnInit, Pipe } from '@angular/core';
import { MatButtonModule } from  '@angular/material/button' ;
import { MatCardModule } from  '@angular/material/card' ;
import {MatGridListModule} from '@angular/material/grid-list';
import { Produto } from '../models/Produto.model';
import { produto } from '../services/produto';

@Component({
  selector: 'app-inicio',
  imports: [ MatCardModule, MatButtonModule, MatGridListModule ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  public produtos: Produto[] = []
  private produtoService = inject(produto)

  ngOnInit(): void {
    this.produtoService.getProdutos().subscribe(
      retornarProduto => {
        this.produtos = retornarProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.descricao,
              item.foto,
              item.preco
            );
          }
        )
      }
    )
  }
}
