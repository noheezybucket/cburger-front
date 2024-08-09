import { Component } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [],
  templateUrl: './stats.component.html',
  styleUrl: './stats.component.css'
})
export class StatsComponent {

  orders: any = []
  cancelledOrders : any = 0
  loadingOrders : any = 0
  validatedOrders : any = 0
  todayTotal : any = 0

  constructor(private managerService:ApiService) {
  }

  ngOnInit() {
    this.managerService.listOrders().subscribe(
      (res: any) => {
        this.orders = res.data;
        this.allStats(this.orders)
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  allStats(data:any) {
    for (const datum of data) {
      if (datum.status === "Annuler") {
        this.cancelledOrders += 1
      }

      if (datum.status === "Terminer") {
        this.validatedOrders += 1
      }

      if (datum.status === "Terminer") {

        this.todayTotal += parseInt(datum.burger.price)
        this.validatedOrders += 1
      }

      if (datum.status === "En cours") {
        this.loadingOrders += 1
      }
    }
  }
}
