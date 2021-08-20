import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  value: string = "";

  constructor(private dialogRef: MatDialogRef<AddUserComponent>) { }

  ngOnInit(): void {
  }

  addUser() {
    if (this.value) {
      this.dialogRef.close(this.value);
    }
    this.value = "";
  }

  cancelAction(e:any) {
    this.dialogRef.close();
  }
}
