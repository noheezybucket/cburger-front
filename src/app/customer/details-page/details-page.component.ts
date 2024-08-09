import {Component, Input} from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {BurgerCardComponent} from "../../components/burger-card/burger-card.component";
import {FormsModule, NgForm} from "@angular/forms";
import {OrderValidatedComponent} from "../order-validated/order-validated.component";

@Component({
  selector: 'app-details-page',
  standalone: true,
  imports: [RouterOutlet, BurgerCardComponent, RouterLink, FormsModule, OrderValidatedComponent],
  templateUrl: './details-page.component.html',
  styleUrl: './details-page.component.css'
})
export class DetailsPageComponent {
  burger: any = []
  burgers : any =[]
  ordered : boolean = false;
  burger_id : any
  client_firstname !: string
  client_lastname !: string
  client_address !: string
  client_phone !: number
  errorMessage = ""

  constructor(private customerService:ApiService,
              private route:ActivatedRoute,
              private router:Router
  ) {}

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

  onSubmitForm(form:NgForm) {
    form.value.burger_id = this.burger.id
    if(this.client_firstname !== undefined ||
      this.client_lastname !== undefined ||
      this.client_address !== undefined ||
      this.client_phone !== undefined)
    {
      this.errorMessage = ""
      this.customerService.createOrder(form.value).subscribe(
      (res: any) => {
        this.ordered = true;
        setTimeout(()=> {
          this.router.navigate(['/customer/catalogue']);
        }, 3000)
      }
    )
  } else {
      this.errorMessage = "Saisies incorrectes... Merci de vérifier vos saisies"
    }
  }

}
