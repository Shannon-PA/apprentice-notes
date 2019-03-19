import { Component } from '@angular/core';
import {AuthService} from './auth.service';

import { TodolistService } from './todolist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo-list';
  constructor(private authSvc: AuthService, private todoSvc: TodolistService) {
    this.todoSvc.get_todolist().subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }
}
