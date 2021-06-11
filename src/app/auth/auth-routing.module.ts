import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';
import {Routes, RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {LayoutComponent} from './layout/layout.component';

// * Auth Routes
// * Note: This routes are lazily loaded
const authRoute: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: '', redirectTo: 'login', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(authRoute)],
  exports: [RouterModule],
})
export class AuthRoutingModule {
}
