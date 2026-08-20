import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Inicio } from './inicio/inicio';
import { Restrito } from './restrito/restrito';
import { MenuProduto } from './restrito/menu-produto/menu-produto';
import { ListaProduto } from './restrito/lista-produto/lista-produto';
import { CadastroProduto } from './restrito/cadastro-produto/cadastro-produto';
import { AtualizaProduto } from './restrito/atualiza-produto/atualiza-produto';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: 'inicio', component: Inicio},
    {path: 'login', component: Login},
    {path: 'restrito', component: Restrito, children: [
        {path: 'menu', component: MenuProduto},
        {path: 'lista', component: ListaProduto},
        {path: 'cadastro', component: CadastroProduto},
        {path: 'editar/:id', component: AtualizaProduto}
    ]}
];
