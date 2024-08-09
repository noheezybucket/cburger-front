import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public url: string = "http://localhost:8000/api"

  login(email:string, password:string): Observable<any> {
    return this.http.post(this.url + '/login', { email, password });
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

  }

  // public isAuthenticated() : boolean {
  //   const token = localStorage.getItem('authToken');
  //   const helper = new JwtHelperService();
  //   const isExpired = helper.isTokenExpired(token);
  //   return !isExpired;
  // }
}
