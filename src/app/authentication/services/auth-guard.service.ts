import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Roles} from "../../models";
import {MatDialog} from "@angular/material/dialog";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
    ) {
  }

  canActivate(route: ActivatedRouteSnapshot, { url }: RouterStateSnapshot): boolean {
    console.log('here');
    if (this.authService.isUserLoggedIn()) {
      return true;
    }

    this.authService.setRedirectUrl(url);
    // this.dialog.open(AccessComponent);
    this.router.navigate([this.authService.getLoginUrl()]);

    return false;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const loggedInUser = this.authService.getLoggedInUser();

    return loggedInUser.role === Roles.admin;
  }
}
