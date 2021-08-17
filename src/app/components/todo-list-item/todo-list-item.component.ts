import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() task:string='';
  isExpanded:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  deleteItem(e:any) {
    e.target.parentNode.parentNode.remove();
  }

  editItem(e:any){
   let editedTask = prompt("Edit the text: ");
    if (editedTask) {
      this.task = editedTask as string;
    }
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
  

}
