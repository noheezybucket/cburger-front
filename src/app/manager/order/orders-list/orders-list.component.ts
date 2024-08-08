import { Component } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-orders-list',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './orders-list.component.html',
  styleUrl: './orders-list.component.css'
})
export class OrdersListComponent {
  orders: any = []

  constructor(private managerService:ApiService) {
  }

  ngOnInit() {
    this.managerService.listOrders().subscribe(
      (res: any) => {
        this.orders = res.data;
        console.log(this.orders)
      },
      (err: any) => {
        console.log(err);
      }
    )
  }
}