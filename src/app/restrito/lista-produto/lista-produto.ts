import { Component } from '@angular/core';
import { Produto } from '../../models/Produto.model';

@Component({
  selector: 'app-lista-produto',
  imports: [],
  templateUrl: './lista-produto.html',
  styleUrl: './lista-produto.css',
})
export class ListaProduto {

  private Produtos: Produto[] = [];

}
