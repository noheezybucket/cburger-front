import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HttpRequestInterceptor} from "./core/http-request.interceptor";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HttpClientModule],
  // providers : [
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: HttpRequestInterceptor,
  //     multi: true,
  //   },
  // ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cburger';
}
