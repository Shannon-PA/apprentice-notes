import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = null;

  constructor(private http: HttpClient, private router: Router) { }

  login(username : string, password: string){
    this.http.get('http://localhost:8000/signin', {headers : new HttpHeaders({
      'username' : username,
      'password' : password
      })
    }).subscribe(
      (val : any) => {
        this.token = val.token;
        this.router.navigate(['/list'])
      }
    )
  }
}
