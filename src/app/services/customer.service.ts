import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }
  public url: string = "http://localhost:8000/api"

  getCatalogue() {
    return this.http.get(`${this.url}/all-burgers`);
  }

  getBurgerById(id:any) {
    return this.http.get(`${this.url}/single-burger/${id}`);
  }
}
