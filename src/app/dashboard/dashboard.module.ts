import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [DashboardhomeComponent, OverviewComponent],
  imports: [
    DashboardRoutingModule,
    SharedModule
  ],
})
export class DashboardModule {}
