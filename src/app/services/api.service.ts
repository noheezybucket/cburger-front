import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private token = localStorage.getItem("token");
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })

  constructor(private http: HttpClient) { }
  public url: string = "http://localhost:8000/api"



  getCatalogue() {
    return this.http.get(`${this.url}/all-burgers`);
  }

  getBurgerById(id:any) {
    return this.http.get(`${this.url}/single-burger/${id}`);
  }

  createOrder(payload: any) {
    return this.http.post(`${this.url}/create-order`, payload)
  }

  // manager

  createBurger(payload: any) {
    return this.http.post(`${this.url}/burgers`, payload, { headers: this.headers })
  }

  updateBurger(payload: any, id: any) {
    return this.http.put(`${this.url}/burgers/${id}`, payload, { headers: this.headers });
  }

  deleteBurger(id: any) {
    return this.http.delete(`${this.url}/burgers/${id}`, { headers: this.headers });
  }

  getOrderById(id:any) {
    return this.http.get(`${this.url}/orders/${id}`, { headers: this.headers });
  }

  listOrders() {
    return this.http.get(`${this.url}/orders`, { headers: this.headers });
  }

  updateOrder(payload: any,id:any) {
    return this.http.put(`${this.url}/orders/${id}`, payload, { headers: this.headers });
  }
}
