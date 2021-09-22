import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import Task from 'src/app/models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  constructor(
    private _http: HttpClient,
  ) { }

  //** This is post request
  addOne (task: Task) {
    let url = "http://192.168.4.108:5001/api/todo/";
    return this._http.post<Task>(url, task);
  }

  getAll() {
    let url = "http://192.168.4.108:5001/api/todo/";
    return this._http.get<Task[]>(url);
  }

  deleteOne(task: Task) {
    let url = `http://192.168.4.108:5001/api/todo/${task.id}`;
    return this._http.delete<Task>(url);
  }

  updateOne(task: Task) {
    let url = "http://192.168.4.108:5001/api/todo/";
    return this._http.put<Task>(url, task);
  }
}
