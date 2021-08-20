import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  value: string = "";

  constructor(private dialogRef: MatDialogRef<EditTaskComponent>) { }

  ngOnInit(): void {
  }


  cancelAction(e:any) {
    this.dialogRef.close();
  }

  editTask() {
    if (this.value) {
      this.dialogRef.close(this.value);
    }
    this.value = "";
  }
  
}
