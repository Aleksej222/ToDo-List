import { Component, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventEmitter } from '@angular/core';
import { CompletedTasksComponent } from '../modals/completed-tasks/completed-tasks.component';
import { EditTaskComponent } from '../modals/edit-task/edit-task.component';
import Task from 'src/app/models/task';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() task:Task;
  @Output() done=new EventEmitter();
  @Output() delete=new EventEmitter();
  isExpanded:boolean=false;
  value:any;
  
  constructor( 
    public dialog: MatDialog,
    private todoService: TodoService
    ) { }

  ngOnInit(): void {
  }

  deleteItem(e:any) {
  
    
      this.delete.emit(this.task);
  }

  editItem() {
    const dialogRef = this.dialog.open(EditTaskComponent,{
      data: {
        task: {...this.task}
      }
    });

    dialogRef.afterClosed().subscribe((task:Task) => {
      if(task) {
        console.log(task)
        
        // this.task.description=result;
        this.todoService.updateOne(task).subscribe((response: Task) => {
          this.task=response; 
        })
      }
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

  taskCompleted(e:any) {
    this.done.emit(this.task);
    //e.target.parentNode.parentNode.remove();
  }
}
