import { Component } from '@angular/core';
@Component({
  template: `
    <mat-toolbar>
      <ul class="navigation">
        <li><a routerLink="/article" routerLinkActive="active">Article</a></li>
        <li><a routerLink="/address" routerLinkActive="active">Address</a></li>
      </ul>

      <logout></logout>
    </mat-toolbar>

    <div class="main">
      <router-outlet></router-outlet>
    </div>
  `
})
export class DashboardLayoutComponent {
}
