import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {

  constructor(private httpSvc: HttpClient) { }

  get_todolist() {
    return this.httpSvc.get('http://localhost:3000')
  }
}
