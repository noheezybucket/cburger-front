import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
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
    return this.http.post(`${this.url}/burgers`, payload)
  }

  updateBurger(payload: any, id: any) {
    return this.http.put(`${this.url}/burgers/${id}`, payload);
  }

  deleteBurger(id: any) {
    return this.http.delete(`${this.url}/burgers/${id}`);
  }

  getOrderById(id:any) {
    return this.http.get(`${this.url}/orders/${id}`);
  }

  listOrders() {
    return this.http.get(`${this.url}/list-orders`);
  }

  updateOrder(payload: any,id:any) {
    return this.http.put(`${this.url}/orders/${id}`, payload);
  }
}
