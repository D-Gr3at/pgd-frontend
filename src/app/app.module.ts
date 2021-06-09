import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { UnAuthorizedErrorComponent } from './error/un-authorized-error/un-authorized-error.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    UnAuthorizedErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
