import {
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';

import { AuthService } from '@services/auth.service';

@Injectable({ providedIn: 'root' })
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(
    @Inject('BASE_URL') private baseUrl: string,
    private readonly authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.includes('assets')) {
      return next.handle(request);
    }

    request = request.clone({
      url: `${this.baseUrl}/${request.url}`,
      setHeaders: {
        Authorization: `Bearer ${this.authService?.user?.value?.token}`,
      },
    });

    return next
      .handle(request)
      .pipe(tap(null, (error) => this.handleError(error)));
  }

  handleError(err: HttpErrorResponse): void {
    if (err.status === 500) {
      console.error(`Internal server error.`);
    }
  }
}
