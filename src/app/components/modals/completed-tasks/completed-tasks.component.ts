import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.css']
})
export class CompletedTasksComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CompletedTasksComponent>) { }

  ngOnInit(): void {
  }

  exitCompletedTasks () {
    this.dialogRef.close();
  }

}
