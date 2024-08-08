import { Component } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-single-order',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './single-order.component.html',
  styleUrl: './single-order.component.css'
})
export class SingleOrderComponent {
  order: any = []
  client_firstname !: string
  client_lastname !: string
  client_address !: string
  client_phone !: number
  status !: string
  payed !: boolean
  burger_id : any

  constructor(private managerService:ApiService,
              private route:ActivatedRoute, private router:Router) {}

  ngOnInit() {
    const orderId = this.route.snapshot.params['orderId'];

    this.managerService.getOrderById(orderId).subscribe(
      (res: any) => {
        console.log(res.data)
        this.order = res.data;
        this.client_firstname = this.order.client_firstname;
        this.client_lastname = this.order.client_lastname;
        this.client_address = this.order.client_address;
        this.client_phone = this.order.client_phone;
        this.status = this.order.status;
      },
      (err: any) => {
        console.log(err);
      }
    )
  }

  onSubmitForm(form:NgForm, id:any) {
    if(form.value.status == 'Payer') {
      form.value.payed = true
    }

    form.value.burger_id = this.order.burger.id


    this.managerService.updateOrder(form.value, id).subscribe(
      (res: any) => {
        console.log(res)
          this.router.navigate(['/manager/orders/update/'+id]).then(() => {
            window.location.reload();
          });

      }
    )
  }
}
