import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddUserComponent } from  './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component'
import { AppModule } from './app.module';

import { CommonModule } from '@angular/common'; 
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  //standalone: true,
  //imports: [RouterOutlet,AddUserComponent,UserListComponent,AppModule,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'user-management-app' ;

}