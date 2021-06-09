import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  //* Your shared components, pipes, directives declarations goes below
  declarations: [SidenavComponent, ToolbarComponent],
  //* Your modules goes below
  imports: [CommonModule, RouterModule],
  //* Exports components, pipes, directives and modules below
  exports: [CommonModule, SidenavComponent, ToolbarComponent],
})
export class SharedModule {}
