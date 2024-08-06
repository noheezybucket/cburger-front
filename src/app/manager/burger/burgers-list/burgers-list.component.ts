import { Component } from '@angular/core';
import {BurgerCardComponent} from "../../../components/burger-card/burger-card.component";
import {CustomerService} from "../../../services/customer.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-burgers-list',
  standalone: true,
  imports: [
    BurgerCardComponent,
    RouterLink
  ],
  templateUrl: './burgers-list.component.html',
  styleUrl: './burgers-list.component.css'
})
export class BurgersListComponent {
  burgers: any = []

  constructor(private customerService:CustomerService) {
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
