import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskComponent } from '../modals/edit-task/edit-task.component';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() task:string='';
  isExpanded:boolean=false;
  
  constructor( public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  deleteItem(e:any) {
    e.target.parentNode.parentNode.remove();
  }

  editItem() {
    const dialogRef = this.dialog.open(EditTaskComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result)
      this.task = result;
    });
  }

  expandText(e:any) {
    this.isExpanded=!this.isExpanded;
  }
  isOverflown(elementId:string) {
    const elem = document.getElementById(elementId);

    if (elem) {
        return (elem.offsetWidth < elem.scrollWidth);
    }

    else {
        return false;
    }
  }

  done(e:any) {
   e.target.disabled = true;
  }
}
