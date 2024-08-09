import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  providers: [AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  loginForm !: FormGroup;
  errorMessage : string = ""

  constructor(private authService:AuthService ,private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  onSubmitForm(){
    console.log(this.loginForm.value)
    if(this.loginForm.value.password !== "" || this.loginForm.value.email !== ""){
      this.errorMessage = ""
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
        (res: any) => {
          const token = res.data.token;
          window.localStorage.setItem('user', JSON.stringify(res.data.name));
          window.localStorage.setItem('token', token);
          this.router.navigate(['manager/orders/list']).finally(() => location.reload());
          console.log(res)
        }, (err:any) =>  {
          console.log(err)
        }
      )
    } else {
      this.errorMessage = "Saisies incorrectes... Merci de vérifier vos saisies"

    }
  }
}
