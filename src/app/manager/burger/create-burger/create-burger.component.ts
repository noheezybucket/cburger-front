import {Component, OnInit} from '@angular/core';
import {FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "../../../services/api.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {timeout} from "rxjs";

@Component({
  selector: 'app-create-burger',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './create-burger.component.html',
  styleUrl: './create-burger.component.css'
})
export class CreateBurgerComponent implements OnInit {

  name !: string
  description !: string
  price !: number
  image !: string
  created : boolean = false
  timeout = 5
  errorMessage : string = ""

  constructor(private managerService:ApiService,
              private route:ActivatedRoute,
              private router:Router) {
  }

  ngOnInit() {

  }

  onSubmitForm(form: NgForm) {
    console.log(form.value)

    if(this.name != undefined || this.description != undefined || this.price != undefined || this.image != undefined ){

    this.managerService.createBurger(form.value).subscribe(
      (res: any) => {
        this.created = true
        console.log(res)
        this.router.navigateByUrl('/manager/burgers/list')
      }, (err: any) => {
        console.log(err)
        this.errorMessage = "Saisies incorrectes... Merci de vérifier vos saisies"

      }
    )
    } else {
      this.errorMessage = "Veuillez remplir les champs"
    }

  }

}
