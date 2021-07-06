import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './interceptor/token.interceptor';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { UnAuthorizedErrorComponent } from './error/un-authorized-error/un-authorized-error.component';
import {AuthGuard} from './guard/auth.guard';
import {LoggedInAuthGuard} from './guard/logged-in-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UnAuthorizedErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }, AuthGuard, LoggedInAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
