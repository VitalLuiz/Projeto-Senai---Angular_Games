import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-menu',
  imports: [ MatIconModule, MatButtonModule, MatToolbarModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {}
