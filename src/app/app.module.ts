import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common'; 


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AddUserComponent,
    AppComponent,
    UserListComponent,
    UserDetailsComponent

  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,


  ],

  exports: [
],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
