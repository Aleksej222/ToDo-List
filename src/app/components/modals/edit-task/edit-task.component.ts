import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import Task from 'src/app/models/task';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  task: Task;

  constructor(
    private dialogRef: MatDialogRef<EditTaskComponent>,
    private todoService: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.task = data.task;
    // if(this.task.description.length>20){
    //   this.task.description='';
    // }
  }

  ngOnInit(): void {
  }


  cancelAction(e: any) {
    this.dialogRef.close();
  }

  editTask() {
    if (this.task.description) {
      this.dialogRef.close(this.task);
    }

  }

}

