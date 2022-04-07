import { Component } from '@angular/core';
@Component({
  template: `
    <mat-toolbar>
      <ul class="navigation">
        <li><a routerLink="/home/article" routerLinkActive="active">Article</a></li>
        <li><a routerLink="/home/address" routerLinkActive="active">Address</a></li>
      </ul>

      <logout></logout>
    </mat-toolbar>

    <div class="main">
      <h2>Welcome to dashboard!</h2>
      <router-outlet></router-outlet>
    </div>
  `
})
export class DashboardLayoutComponent {
}
