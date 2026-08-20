import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuProduto } from './menu-produto/menu-produto';

@Component({
  selector: 'app-restrito',
  imports: [RouterOutlet, MenuProduto],
  templateUrl: './restrito.html',
  styleUrl: './restrito.css',
})
export class Restrito {}
