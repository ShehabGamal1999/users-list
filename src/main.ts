import { bootstrapApplication } from '@angular/platform-browser';
import { UserListComponent } from './app/user-list/user-list.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

bootstrapApplication(UserListComponent, {
  providers: [provideHttpClient(), FormsModule, CommonModule],
});
