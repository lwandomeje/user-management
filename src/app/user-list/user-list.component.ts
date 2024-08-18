import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router} from '@angular/router';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common'; 
//import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-user-list',
  //standalone : true,
  //imports: [AppModule, ReactiveFormsModule,CommonModule,FormsModule],

  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  [x: string]: any;
  users: User[] = [];
  searchTerm: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.users$.subscribe(users => {
      this.users = this.userService.searchUsers(this.searchTerm);
    });
  }

  onSearch(): void {
    this.users = this.userService.searchUsers(this.searchTerm);
  }

}

