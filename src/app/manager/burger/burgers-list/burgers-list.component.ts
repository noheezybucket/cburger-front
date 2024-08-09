import { Component } from '@angular/core';
import {BurgerCardComponent} from "../../../components/burger-card/burger-card.component";
import {ApiService} from "../../../services/api.service";
import {Router, RouterLink} from "@angular/router";
import {FormsModule, NgForm} from "@angular/forms";
import {StatsComponent} from "../../../components/stats/stats.component";

@Component({
  selector: 'app-burgers-list',
  standalone: true,
  imports: [
    BurgerCardComponent,
    RouterLink,
    FormsModule,
    StatsComponent
  ],
  templateUrl: './burgers-list.component.html',
  styleUrl: './burgers-list.component.css'
})
export class BurgersListComponent {
  burgers: any = []


  constructor(private managerService:ApiService, private router:Router) {
  }

  ngOnInit() {
    this.managerService.getCatalogue().subscribe(
      (res: any) => {
        this.burgers = res.data;
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
