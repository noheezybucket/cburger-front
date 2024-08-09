import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-header-manager',
  standalone: true,
    imports: [
        RouterLink,
        RouterLinkActive
      ,HttpClientModule
    ],
  providers:[AuthService],
  templateUrl: './header-manager.component.html',
  styleUrl: './header-manager.component.css'
})
export class HeaderManagerComponent implements OnInit{
  username : any
  constructor(private authService:AuthService, private router:Router) {
  }

  ngOnInit() {
    this.username = localStorage.getItem('user')
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['auth/login'])
  }
}
