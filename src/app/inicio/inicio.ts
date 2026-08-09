import { Component } from '@angular/core';
import { MatButtonModule } from  '@angular/material/button' ;
import { MatCardModule } from  '@angular/material/card' ;
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-inicio',
  imports: [ MatCardModule, MatButtonModule, MatGridListModule ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {}
