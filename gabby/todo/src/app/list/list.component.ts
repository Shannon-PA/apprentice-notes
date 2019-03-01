import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  myList;

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getList().subscribe(
      val => {
        this.myList = val;
      }
    );
  }

}
