import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TodosService {
  constructor(private http: Http) { }
  
  getTodos() {
    return this.http.get('http://127.0.0.1:8000')
      .map(response => response.json());
  }
}
