import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {TodosService} from './app.http-service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'Todos !';
  
  constructor(private todosservice : TodosService) { }
  todos = {};

  loadTodos () {
    this.todosservice.getTodos().subscribe(data => this.todos = data);
  }
}
