import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersSubject = new BehaviorSubject<User[]>([
    { id: 1, name: 'lwando', email: 'lwandomeje33@gmail.com' },
    { id: 2, name: 'zube gangqani', email: 'zubegangqani@gmail.com' }
  ]);

  users$ = this.usersSubject.asObservable();

  constructor() {}

  addUser(user: User): void {
    const currentUsers = this.usersSubject.value;
    this.usersSubject.next([...currentUsers, user]);
  }

  searchUsers(term: string): User[] {
    if (!term.trim()) {
      return this.usersSubject.value;
    }
    return this.usersSubject.value.filter(user =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
  }
}
