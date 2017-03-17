import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Todo } from './todo.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class TodosService {
  constructor(private _http : Http, private _post : Http) { }
  
       private handleError (error: Response | any) {         
           let errMsg: string;         
           if (error instanceof Response) {         
               const body = error.json() || '';         
               const err = body.error || JSON.stringify(body);         
               errMsg = `${error.status} - ${error.statusText || ''} ${err}`;         
            } else {         
                errMsg = error.message ? error.message : error.toString();         
            }         
            console.error(errMsg);         
            return Observable.throw(errMsg);     
        }

  getTodos() : Observable<any> {
    return this._http.get('http://127.0.0.1:8000/todos')
      .map(response => response.json())
      .catch(this.handleError);
}

  addTodo(todo: Todo): Observable<any> {
         return this._http.post('http://127.0.0.1:8000/todos',todo)          
         .map(function(res : Response ) {              
             console.log(res)             
             return res.json()          
            })          
         .catch(this.handleError)
 
  }
}
