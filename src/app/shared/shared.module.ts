import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxNavbarModule} from 'ngx-bootstrap-navbar';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import {NgxInputLoaderModule} from 'ngx-input-loader';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {NgxWebstorageModule} from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    SideBarComponent,
    HamburgerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonsModule,
    FontAwesomeModule,
    NgxWebstorageModule.forRoot(),
    NgxInputLoaderModule.forRoot({
      // Defaults are shown. Change them to your according to your need.

      loader: 'rolling', // full list of loaders is provided below
      position: 'center', // options: 'right', 'center', 'left'
      color: 'white',
      background: '#007bff',
      padding: '10px', // any supported format
      height: 1, // number relative to input height like 0.9 or 0.25
      opacity: 1,
      speed: 1000, // in milliseconds
      padButton: false, // adds padding to buttons

      // In case any property is not specified, default options are used.
    }),
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgxNavbarModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    NgxInputLoaderModule,
    HamburgerComponent,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    NgxNavbarModule,
    RouterModule,
    ButtonsModule,
    ReactiveFormsModule,
    NgxWebstorageModule,
    SideBarComponent
  ]
})
export class SharedModule { }
