import { Component } from '@angular/core';
import {BurgerCardComponent} from "../../../components/burger-card/burger-card.component";
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";

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

  constructor(private managerService:ApiService,
              private route:ActivatedRoute, private router:Router) {}

  ngOnInit() {
    const burgerId = this.route.snapshot.params['burgerId'];

    this.managerService.getBurgerById(burgerId).subscribe(
      (res: any) => {
        console.log(res.data.status)
        this.burger = res.data;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  deleteBurger(id: number) {
    this.managerService.deleteBurger(id).subscribe(
      (res: any) => {
        this.router.navigate(['/manager/burgers/list']).then(() => {
          window.location.reload();
        });
        console.log(res.data)
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
}
