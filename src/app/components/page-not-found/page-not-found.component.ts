import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HeaderComponent
  ],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.css'
})
export class PageNotFoundComponent {

}
