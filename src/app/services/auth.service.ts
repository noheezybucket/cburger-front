import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: string = 'https://localhost:8000/api';
  constructor(private http: HttpClient) { }

  loginUser(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl + '/api/User/login', { username, password });
  }
  public isAuthenticated() : boolean {
    const token = localStorage.getItem('authToken');
    const helper = new JwtHelperService();
    const isExpired = helper.isTokenExpired(token);
    return !isExpired;
  }
}
