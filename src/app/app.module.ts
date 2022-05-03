import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardLayoutComponent} from './layout/dashboard.layout.component';
import {AddressComponent} from './address/address.component';
import {LogoutComponent} from './authentication/logout.component';
import {AuthGuardService} from './authentication/services/auth-guard.service';
import {AuthService} from './authentication/services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  declarations: [
    DashboardLayoutComponent,
    AddressComponent,
    LogoutComponent,
    AppComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
}
