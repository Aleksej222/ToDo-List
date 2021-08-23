import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {
  doneTasks=new Array();


  constructor(
    private dialogRef: MatDialogRef<CompletedTasksComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
    ) {
      this.doneTasks=data.doneTasks;
    }

  ngOnInit(): void {
  }

  exitCompletedTasks () {
    this.dialogRef.close();
  }

}
