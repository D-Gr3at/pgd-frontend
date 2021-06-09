import { AuthRoutingModule } from './auth-routing.module';
//* Modules
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

//* Components
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

//* Directives

//* Pipes

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
  ],
  imports: [SharedModule, AuthRoutingModule],
})
export class AuthModule {}
