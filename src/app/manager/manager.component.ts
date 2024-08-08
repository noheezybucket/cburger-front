import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderManagerComponent} from "../components/header-manager/header-manager.component";
import {FooterManagerComponent} from "../components/footer-manager/footer-manager.component";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderManagerComponent,
    FooterManagerComponent,
    HttpClientModule
  ],
  providers:[ApiService],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

}
