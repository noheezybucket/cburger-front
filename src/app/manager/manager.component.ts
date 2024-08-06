import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderManagerComponent} from "../components/header-manager/header-manager.component";
import {FooterManagerComponent} from "../components/footer-manager/footer-manager.component";
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "../services/customer.service";

@Component({
  selector: 'app-manager',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderManagerComponent,
    FooterManagerComponent,
    HttpClientModule
  ],
  providers:[CustomerService],
  templateUrl: './manager.component.html',
  styleUrl: './manager.component.css'
})
export class ManagerComponent {

}
