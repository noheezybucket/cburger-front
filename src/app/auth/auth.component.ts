import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    RouterOutlet,HttpClientModule
  ],
  providers: [AuthService],

  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
