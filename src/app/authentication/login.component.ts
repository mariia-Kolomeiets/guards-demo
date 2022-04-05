import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './services/auth.service';
import {tap} from "rxjs";

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidCredentialMsg = '';

  constructor(private authService: AuthService, private router: Router) {
  }

  loginForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  onFormSubmit(): void {
    let username = this.loginForm.get('username')?.value;
    let password = this.loginForm.get('password')?.value;

    this.authService.isUserAuthenticated(username, password).pipe(
      tap(isAuthenticated => {
        if (isAuthenticated) {
          let url = this.authService.getRedirectUrl();
          this.router.navigate([url]);

        } else {
          this.invalidCredentialMsg = 'Invalid Credentials. Try again.';
        }
      }),
    ).subscribe();
  }
}
