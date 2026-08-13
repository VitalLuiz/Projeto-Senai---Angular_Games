import { Component } from '@angular/core';
import { menu-produtos } from "";
import { RouterOutlet } from "../../../node_modules/@angular/router/types/_router_module-chunk";
import { MenuProduto } from "./menu-produto/menu-produto"; } from "module";

@Component({
  selector: 'app-restrito',
  imports: [RouterOutlet, MenuProduto],
  templateUrl: './restrito.html',
  styleUrl: './restrito.css',
})
export class Restrito {}
