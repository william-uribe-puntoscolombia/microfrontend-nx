import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserAuth } from '@ng-mf/data-access-user';
import { inject } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'ng-mf-login-entry',
  templateUrl: './entry.html',
  styleUrls: ['./entry.css'],
})
export class RemoteEntry {
  private userAuth = inject(UserAuth);
  username = '';
  password = '';
  isLoggedIn$ = this.userAuth.isUserLoggedIn$;

  login() {
    this.userAuth.checkCredentials(this.username, this.password);
  }
}
