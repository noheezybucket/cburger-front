import {Component, Input} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from "@angular/router";
import {CustomerService} from "../../services/customer.service";
import {BurgerCardComponent} from "../../components/burger-card/burger-card.component";

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [RouterOutlet, BurgerCardComponent],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent {
  burger: any = []
  burgers : any =[]

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
