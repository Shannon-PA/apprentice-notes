import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpSvc: HttpClient) { 
    this.httpSvc.get('http://localhost:3000/').subscribe(data => console.log(data), e => console.log(e));
  }

}
