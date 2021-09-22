import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReadMoreComponent } from './components/read-more/read-more.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddUserComponent } from './components/modals/add-user/add-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditTaskComponent } from './components/modals/edit-task/edit-task.component';
import { DeleteUserComponent } from './components/modals/delete-user/delete-user.component';
import { CompletedTasksComponent } from './components/modals/completed-tasks/completed-tasks.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    ReadMoreComponent,
    AddUserComponent,
    EditTaskComponent,
    DeleteUserComponent,
    CompletedTasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule,

  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
