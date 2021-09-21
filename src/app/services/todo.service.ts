import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Task from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(
    private http: HttpClient,
  ) { }

  //** This is post request
  addOne (task: Task) {
    let url = "http://192.168.4.108:5001/api/todo/";
    return this.http.post<Task>(url, task);
  }
}
