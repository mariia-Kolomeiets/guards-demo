import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Roles} from "../../models";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    if (this.authService.isUserLoggedIn()) {
      return true;
    }

    this.authService.setRedirectUrl(url);
    this.router.navigate([this.authService.getLoginUrl()]);

    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let loggedInUser = this.authService.getLoggedInUser();

    return loggedInUser.role === Roles.admin;
  }
}
