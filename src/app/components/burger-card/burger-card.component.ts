import {Component, Input} from '@angular/core';
import {Burger} from "../../models/burger";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-burger-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './burger-card.component.html',
  styleUrl: './burger-card.component.css'
})
export class BurgerCardComponent {
  @Input() burger!: Burger;
}
