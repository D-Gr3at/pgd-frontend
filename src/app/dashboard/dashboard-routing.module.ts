import { OverviewComponent } from './overview/overview.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardhomeComponent,
    children: [
      {
        path: 'dashboard',
        component: OverviewComponent,
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
