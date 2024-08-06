import { Component } from '@angular/core';
import {BurgerCardComponent} from "../../../components/burger-card/burger-card.component";
import {CustomerService} from "../../../services/customer.service";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-single-burger',
  standalone: true,
  imports: [
    BurgerCardComponent,
    RouterLink
  ],
  templateUrl: './single-burger.component.html',
  styleUrl: './single-burger.component.css'
})
export class SingleBurgerComponent {
  burger: any = []

  constructor(private customerService:CustomerService,
              private route:ActivatedRoute) {}

  ngOnInit() {
    const burgerId = this.route.snapshot.params['burgerId'];

    this.customerService.getBurgerById(burgerId).subscribe(
      (res: any) => {
        console.log(res.data.status)
        this.burger = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
}
