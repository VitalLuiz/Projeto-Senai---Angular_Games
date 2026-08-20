import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto.model';

@Injectable({
    providedIn: 'root'
})
export class produto {
    private http = inject(HttpClient)
    private url = 'http://localhost:3000/Produtos'

    getProduto(id: any): Observable<Produto>{
        const urlIdProduto = `${this.url}/?id=${id}`
        return this.http.get<Produto>(urlIdProduto)
    }
    getProdutos(): Observable<Produto[]>{
        return this.http.get<Produto[]>(this.url)
    }
    cadastrarProduto(produto: Produto): Observable<Produto>{
        return this.http.post<Produto>(this.url, produto)
    }
    atualizarProduto(id: any, produto: Produto): Observable<Produto>{
        const urlAtualizar = `${this.url}/?id=${id}`;
        return this.http.put<Produto>(urlAtualizar, produto)
    }
    removerProduto(id: any): Observable<Produto>{
        const urldeletar = `${this.url}/?id=${id}`;
        return this.http.delete<Produto>(urldeletar)
    }
}
