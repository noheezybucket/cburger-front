import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {HeaderComponent} from "../components/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {ApiService} from "../services/api.service";
import {FooterComponent} from "../components/footer/footer.component";

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HttpClientModule,
    FooterComponent
  ],
  providers:[ApiService],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

}
