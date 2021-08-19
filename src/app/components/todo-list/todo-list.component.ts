import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../modals/add-user/add-user.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks = new Array();
  newItem: string = "";
  users = new Array();

  constructor(
    public dialog: MatDialog
    ) {

   }

  ngOnInit(): void {
  }

  add(e: any) {
    e.preventDefault();

    if (this.newItem) {
      this.tasks.push(this.newItem);
    }
    this.newItem = "";
  }

  addNewUser() {
    // let newUser = prompt("User name:");
    // if (newUser) {
    //   this.users.push(newUser);
    // }
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.users.push(result);
    });
  }
}
