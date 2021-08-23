import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import User from 'src/app/models/user';
import { AddUserComponent } from '../modals/add-user/add-user.component';
import { CompletedTasksComponent } from '../modals/completed-tasks/completed-tasks.component';
import { DeleteUserComponent } from '../modals/delete-user/delete-user.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  tasks = new Array<any>();
  newItem: string = "";
  users = new Array<User>();
  selectedUser: any;
  doneTasks = new Array();
  constructor(
    public dialog: MatDialog
  ) {

  }

  ngOnInit(): void {
  }

  add(e: any) {
    e.preventDefault();

    if (this.newItem !== "" && this.selectedUser) {
      this.selectedUser.tasks.push(this.newItem);
      this.tasks.push(this.newItem);
    }
    else if (this.newItem){
      this.tasks.push(this.newItem);
     }

    this.newItem = "";
  }

  addNewUser() {
    const dialogRef = this.dialog.open(AddUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        var user = new User();
        user.name = result;
        this.users.push(user);
      }
    });
  }

  deleteUser(user: any) {
    const dialogRef = this.dialog.open(DeleteUserComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result.delete == true) {
        var index = this.users.indexOf(user);
        let foundUser=this.users[index];
        this.tasks=this.tasks.filter(t=>foundUser.tasks.includes(t)==false);
        // moze i ovako
        // this.users=this.users.filter((u)=>{
        //   return u!=user
        // }); 
        this.users.splice(index, 1);
        if (user == this.selectedUser) {
          this.selectedUser = undefined;
        }
      }
    })
  }

  deleteItem (item: any) {
    var index = this.tasks.indexOf(item);
    // let foundUser=this.users[index];
    // this.tasks=this.tasks.filter(t=>foundUser.tasks.includes(t)==false);
    this.users.forEach(u=>{
      u.tasks=u.tasks.filter(t=>t!=item);
    })
    this.tasks.splice(index, 1);
    
  }

  changeUser(user: any) {
    this.selectedUser = user
  }

  seeCompletedTasks() {
    const dialogRef = this.dialog.open(CompletedTasksComponent, {
      data: {
        doneTasks: this.doneTasks
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      // if(result)
      // this.task = result;
    });
  }
  taskDoneEvent(task: any) {
    // if(this.doneTasks.includes(task)==false){
    this.doneTasks.push(task);
    this.tasks=this.tasks.filter(t=>t!=task);
   // if(this.selectedUser){
     this.users.forEach(user=>{
      user.tasks=user.tasks.filter((b: any)=>b!=task);
     })
    
   // }
  }
}
