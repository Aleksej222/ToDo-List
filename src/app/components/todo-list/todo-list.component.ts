import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../modals/add-user/add-user.component';
import { CompletedTasksComponent } from '../modals/completed-tasks/completed-tasks.component';
import { DeleteUserComponent } from '../modals/delete-user/delete-user.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks = new Array();
  newItem: string = "";
  users = new Array();
  selectedUser:string='';

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
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.users.push(result);
    });
  }

  deleteUser(user:any) {
    const dialogRef = this.dialog.open(DeleteUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result.delete==true)
      {
        var index = this.users.indexOf(user);
        this.users.splice(index,1);

        // moze i ovako
        // this.users=this.users.filter((u)=>{
        //   return u!=user
        // }); 

        if(user==this.selectedUser){
          this.selectedUser='';
        }
      } 
    })
  }

  changeUser(user: any) {
    this.selectedUser = user
  }

  seeCompletedTasks () {
  const dialogRef = this.dialog.open(CompletedTasksComponent);

  dialogRef.afterClosed().subscribe(result => {
    // if(result)
    // this.task = result;
  });
  }
}
