import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {User} from "../models";

@Component({
  selector: 'logout',
  template: `Logged In: {{loggedInUser.username}} | {{loggedInUser.role}} |
  <button mat-raised-button color="primary" (click)="logout()" input='input'>Logout</button>
  `
})
export class LogoutComponent {
  loggedInUser = {} as User;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
  }

  logout() {
    this.authService.logoutUser();
    this.router.navigate([this.authService.getLoginUrl()]);
  }
}
