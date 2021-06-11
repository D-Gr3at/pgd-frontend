import { AuthRoutingModule } from './auth-routing.module';
//* Modules
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

//* Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';

// * Directives

// * Pipes

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    LayoutComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule
  ],
})
export class AuthModule {}
