import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { User } from '../user.model';

import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { CommonModule } from '@angular/common'; 
//import { BrowserModule } from '@angular/platform-browser';




@Component({
  selector: 'app-add-user',
  //standalone : true,
  templateUrl: './add-user.component.html',
  //imports: [AppModule, ReactiveFormsModule,CommonModule,FormsModule],

  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  addUser(): void {
    if (this.userForm.valid) {
      const newUser: User = {
        id: Math.floor(Math.random() * 1000),
        name: this.userForm.value.name.trim(),
        email: this.userForm.value.email.trim()
      };
      this.userService.addUser(newUser);
      this.userForm.reset();
    }
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }
}

