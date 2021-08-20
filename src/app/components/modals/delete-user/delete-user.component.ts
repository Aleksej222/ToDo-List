import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  value: any;

  constructor(private dialogRef: MatDialogRef<DeleteUserComponent>) { }

  ngOnInit(): void {
  }

  cancelAction(e:any) {
    this.dialogRef.close({delete:false});
  }

  deleteUserConfirmation() {
    this.dialogRef.close({delete:true});
  }

}
