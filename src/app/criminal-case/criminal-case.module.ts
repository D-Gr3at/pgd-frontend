import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddCriminalCaseComponent} from './add-criminal-case/add-criminal-case.component';
import {CriminalCaseDetailsComponent} from './criminal-case-details/criminal-case-details.component';
import {CriminalCaseListComponent} from './criminal-case-list/criminal-case-list.component';
import {SharedModule} from '../shared/shared.module';
import {CriminalCaseRoutingModule} from './criminal-case-routing.module';
import { EditCriminalCaseComponent } from './edit-criminal-case/edit-criminal-case.component';
import { CriminalCaseComponent } from './criminal-case/criminal-case.component';



@NgModule({
  declarations: [
    AddCriminalCaseComponent,
    CriminalCaseDetailsComponent,
    CriminalCaseListComponent,
    EditCriminalCaseComponent,
    CriminalCaseComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        CriminalCaseRoutingModule,
    ]
})
export class CriminalCaseModule { }
