import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {TodosService} from './app.http-service';
import {Todo} from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit { 
  title = 'Todo List !';
  @Output() addTodoEvent = new EventEmitter()

  constructor(private _todosservice : TodosService) { }
  public todos : Todo[] = [{"text": "","completed": true}];

loadTodos () {
    this._todosservice.getTodos().subscribe(data => this.todos = data);
}

ngOnInit(){ 
  this.loadTodos (); 
}

addTodo(text : any) {
  let task: Todo = {"text": text, "completed": true}
  this._todosservice.addTodo(task).subscribe(
     (todo) => {                     
       this.addTodoEvent.emit(todo)                 
      },                 
      (err) => err
  )
  //this.todos.push(task);
}

}
