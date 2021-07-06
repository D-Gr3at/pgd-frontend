import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CriminalCaseListComponent} from './criminal-case-list/criminal-case-list.component';
import {AddCriminalCaseComponent} from './add-criminal-case/add-criminal-case.component';
import {EditCriminalCaseComponent} from './edit-criminal-case/edit-criminal-case.component';
import {CriminalCaseComponent} from './criminal-case/criminal-case.component';
import {CriminalCaseDetailsComponent} from './criminal-case-details/criminal-case-details.component';


const routes: Routes = [
  {
    path: '',
    component: CriminalCaseComponent,
    children: [
      {
        path: ':id/details',
        component: CriminalCaseDetailsComponent,
      },
      {
        path: ':id/edit',
        component: EditCriminalCaseComponent,
      },
      {
        path: 'add',
        component: AddCriminalCaseComponent,
      },
      {
        path: '',
        component: CriminalCaseListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CriminalCaseRoutingModule { }
