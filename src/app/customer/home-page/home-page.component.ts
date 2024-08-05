import {Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {Burger} from "../../models/burger";
import {BurgerCardComponent} from "../../components/burger-card/burger-card.component";

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
  burgers!: Burger[]
  ngOnInit() {
    this.burgers = [
      new Burger(
        1,
        'Double cheese burger',
        'Emmental, Steak etc.',
        true,
        'default',
        2500
      ),new Burger(
        2,
        'Razor Baw burger',
        'Emmental, Steak etc.',
        true,
        'default',
        2500
      ),new Burger(
        3,
        'Carré dans laxe burger',
        'Emmental, Steak etc.',
        true,
        'default',
        2500
      ),new Burger(
        4,
        'Carré dans laxe burger',
        'Emmental, Steak etc.',
        true,
        'default',
        2500
      ),
    ]
  }
}
