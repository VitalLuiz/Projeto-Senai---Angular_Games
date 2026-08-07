import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Rodape } from '../rodape/rodape';
import { MatButtonModule } from  '@angular/material/button' ;
import { MatCardModule } from  '@angular/material/card' ;
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-inicio',
  imports: [ MatCardModule, MatButtonModule, MatGridListModule, Menu, Rodape ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
