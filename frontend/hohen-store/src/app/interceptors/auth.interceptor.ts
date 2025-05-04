import { Injectable, inject } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import Keycloak from 'keycloak-js';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthGuardData } from 'keycloak-angular';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    private keycloak = inject(Keycloak); 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes('/api/dashboard') ) {
            return next.handle(req);
        }
        return from(this.keycloak.tokenParsed ? Promise.resolve(this.keycloak.token!) : this.keycloak.updateToken(5).then(() => this.keycloak.token!)).pipe(
            switchMap(token => {
                if (token) {
                const authReq = req.clone({
                    setHeaders: {
                    Authorization: `Bearer ${token}`
                    }
                });
                return next.handle(authReq);
                }
                return next.handle(req);
            })
        );
  }
}
