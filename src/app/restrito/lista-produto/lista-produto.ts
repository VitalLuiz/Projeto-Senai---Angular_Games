import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Produto } from '../../models/Produto.model';
import { produto } from '../../services/produto';
import { error } from 'console';

@Component({
  selector: 'app-lista-produto',
  imports: [RouterLink],
  templateUrl: './lista-produto.html',
  styleUrl: './lista-produto.css',
})
export class ListaProduto implements OnInit{

  public produtos: Produto[] = [];
  private produtoService = inject(produto)
  private rota = inject(Router)

  ngOnInit(): void {
    this.listarProdutos()
  }

  listarProdutos(){
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

    excluir(id: number) {
      this.produtoService.removerProduto(id).subscribe({
        next: (produto) => {
          this.rota.navigate(["/restrito/lista"]);
        },
        error: (err) => {
          alert("Erro ao Excluir");
        }
      });
    }
}
