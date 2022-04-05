import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {LoginComponent} from './login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [
    LoginComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AuthModule {
}
