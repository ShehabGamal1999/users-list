import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';

interface User {
  profilePicture: string;
  username: string;
  email: string;
  phoneNumber: string;
  birthdate: string;
  role: string;
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, FormsModule, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: User[] = [];
  originalUsers: User[] = [];
  searchEmail: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<User[]>('users.json').subscribe(
      (data) => {
        this.users = data;
        this.originalUsers = [...this.users];
      },
      (error) => {
        console.error('Failed to load users.json:', error);
      }
    );
  }

  onSearchEmailChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchEmail = target.value;
  }

  searchUsers() {
    if (this.searchEmail) {
      this.users = this.originalUsers.filter((user) =>
        user.email.toLowerCase().includes(this.searchEmail.toLowerCase())
      );
    } else {
      this.users = [...this.originalUsers];
    }
  }

  resetSearch() {
    this.searchEmail = '';
    this.users = [...this.originalUsers];
  }

  trackByEmail(index: number, user: User): string {
    return user.email;
  }
}
