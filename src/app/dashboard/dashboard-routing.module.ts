import { OverviewComponent } from './overview/overview.component';
import { DashboardhomeComponent } from './dashboardhome/dashboardhome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CriminalCaseRoutingModule} from '../criminal-case/criminal-case-routing.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardhomeComponent,
    children: [
      {
        path: 'criminal-case',
        loadChildren: () => import('../criminal-case/criminal-case.module').then(m => m.CriminalCaseModule),
        pathMatch: 'full'
      },
      {
        path: '',
        component: OverviewComponent,
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
