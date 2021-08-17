import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks = new Array();
  newItem: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  add(e:any) {
    e.preventDefault();

    if (this.newItem) {
      this.tasks.push(this.newItem);
    }
   
    const input = e.target as HTMLElement;
    this.newItem = "";
  }
}
