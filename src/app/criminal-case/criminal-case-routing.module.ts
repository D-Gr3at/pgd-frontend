import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CriminalCaseListComponent} from './criminal-case-list/criminal-case-list.component';
import {AddCriminalCaseComponent} from './add-criminal-case/add-criminal-case.component';
import {EditCriminalCaseComponent} from './edit-criminal-case/edit-criminal-case.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'add',
        component: AddCriminalCaseComponent,
      },
      {
        path: 'id:/details',
        component: CriminalCaseListComponent,
      },
      {
        path: 'id:/edit',
        component: EditCriminalCaseComponent,
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
