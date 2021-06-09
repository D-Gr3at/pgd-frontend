import { NgModule } from '@angular/core';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppFooterComponent } from './components/app-footer/app-footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxNavbarModule} from 'ngx-bootstrap-navbar';
import {RouterModule} from '@angular/router';
import {ButtonsModule} from 'ngx-bootstrap/buttons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HamburgerComponent } from './components/hamburger/hamburger.component';
import {CommonModule} from '@angular/common';

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
    NgxNavbarModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    AppHeaderComponent,
    AppFooterComponent,
    HamburgerComponent,
    FontAwesomeModule,
    FormsModule,
    CommonModule,
    NgxNavbarModule,
    RouterModule,
    ButtonsModule,
    ReactiveFormsModule,
    SideBarComponent
  ]
})
export class SharedModule { }
