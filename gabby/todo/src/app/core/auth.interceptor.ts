import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    constructor(private authService: AuthService, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        if(this.authService.token){
            req = req.clone({headers: req.headers.set('token', this.authService.token)});
        }
        return next.handle(req).pipe(
            tap((event : HttpEvent<any>) => {
                if(event instanceof HttpResponse){
                    //was successful
                }
            }, (err) => {
                if(err instanceof HttpErrorResponse){
                    if(err.status == 401){
                        //sign the user out
                        this.router.navigate(['/']);
                    }
                }
            })
        );
    }
}