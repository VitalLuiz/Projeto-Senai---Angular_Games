import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Rodape } from '../rodape/rodape';

@Component({
  selector: 'app-login',
  imports: [ Menu, Rodape ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {}
