import { Component } from '@angular/core';
import { MatIconModule } from  '@angular/material/icon' ;
import { MatButtonModule } from  '@angular/material/button' ;
import { MatToolbarModule } from  '@angular/material/toolbar' ;


@Component({
  selector: 'app-menu-produto',
  imports: [MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './menu-produto.html',
  styleUrl: './menu-produto.css',
})
export class MenuProduto {}
