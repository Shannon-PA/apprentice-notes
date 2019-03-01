import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class ListService {
    url: string = "http://localhost:8000/list";
    list;

    constructor(private http: HttpClient){}

    getList() : Observable<any> {
        return this.http.get(this.url);
    }


}