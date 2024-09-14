import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface User {
  profilePicture: string;
  username: string;
  email: string;
  phoneNumber: string;
  birthdate: string;
  role: string;
}

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
})
export class UserCardComponent {
  @Input() user!: User;
  get badgeClass(): string {
    switch (this.user.role) {
      case 'admin':
        return 'bg-danger';
      case 'user':
        return 'bg-success';
      case 'moderator':
        return 'bg-warning';
      default:
        return '';
    }
  }
}
