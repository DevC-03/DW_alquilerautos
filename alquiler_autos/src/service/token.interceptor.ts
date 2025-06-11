import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');

// No agregar token si es la URL de login
    if (token && !req.url.includes('/api/login/')) {
      req = req.clone({
        setHeaders: {
          Authorization: `Token ${token}`,
          'X-API-KEY' : 'ok8G9wPyU2FouLHR4n5vKu8rehSplu7vG0f3'
        }
      });
    }

    if (req.url.includes('/api/login/')) {
      req = req.clone({
        setHeaders: {
          'X-API-KEY' : 'ok8G9wPyU2FouLHR4n5vKu8rehSplu7vG0f3'
        }
      });
    }

    return next.handle(req);
  }
}