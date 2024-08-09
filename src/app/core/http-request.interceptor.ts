import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('Intercepted request:', request);
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Token found, adding Authorization header');
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
    } else if (token?.trim() === '') {
      console.log('Token is empty, logging out');
      this.logout();
    }

    return next.handle(request).pipe(
      tap((ev: HttpEvent<any>) => {
        console.log('Response event:', ev);
      }),
      catchError((response: any) => {
        console.error('Error response:', response);
        if (response.status === 401) {
          this.logout();
        }
        return throwError(response);
      })
    );
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['auth/login']).finally(() => location.reload());
  }
}
