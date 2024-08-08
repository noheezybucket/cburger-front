import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {Burger} from "../../models/burger";
import {BurgerCardComponent} from "../../components/burger-card/burger-card.component";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    BurgerCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit{
  burgers: any = []

  constructor(private customerService:ApiService) {
  }

  ngOnInit() {
    this.customerService.getCatalogue().subscribe(
      (res: any) => {
        this.burgers = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    )

  }
}
