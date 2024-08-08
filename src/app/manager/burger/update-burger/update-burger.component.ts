import { Component } from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-burger',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './update-burger.component.html',
  styleUrl: './update-burger.component.css'
})
export class UpdateBurgerComponent {
  name !: string
  description !: string
  price !: number
  image !: string
  status !: string

  burger !: any

  constructor(private managerService:ApiService,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {
    const burgerId = this.route.snapshot.params['burgerId'];
    this.managerService.getBurgerById(burgerId).subscribe(
      (res: any) => {
        console.log(res.data)
        this.burger = res.data;
        this.name = this.burger.name;
        this.price = this.burger.price;
        this.image = this.burger.image;
        this.description = this.burger.description;
        this.status = this.burger.status;
      },
      (err: any) => {
        console.log(err);
      }
    )

  }

  onSubmitForm(form: NgForm, burgerId:any) {
    console.log(form.value)

    this.managerService.updateBurger(form.value,burgerId).subscribe(
      (res: any) => {
        console.log(res)
        this.router.navigate(['/manager/burgers/list'])

      }, (err: any) => {
        console.log(err)
      }
    )
  }
}
