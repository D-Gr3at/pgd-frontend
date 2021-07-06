import {AfterViewInit, ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CriminalCase, IncidenceReportResponse} from '../../model/criminal-case.model';
import {Page} from '../../model/page.model';
import {ColumnMode} from '@swimlane/ngx-datatable';
import {CriminalCaseService} from '../../services/criminal-case.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-criminal-case-list',
  templateUrl: './criminal-case-list.component.html',
  styleUrls: ['./criminal-case-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CriminalCaseListComponent implements OnInit, AfterViewInit {
  form: FormGroup;
  page = new Page();
  rows = Array<IncidenceReportResponse>();
  ColumnMode = ColumnMode;
  columns = [];

  @ViewChild('myTable') table;
  @ViewChild('buttonsTemplate') buttonsTemplate: TemplateRef<any>;

  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private criminalCaseService: CriminalCaseService,
    private toastrService: ToastrService
  ) {
    this.page.pageNumber = 0;
    this.page.size = 10;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      incidence: ['']
    });
  }

  get incidence() {
    return this.form.get('incidence');
  }

  filter() {
    this.page.incidence = this.incidence.value;
    this.search(this.page);
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.search(this.page);
  }

  search(page: Page) {
    this.criminalCaseService.getResults(page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData[`results`];
      // console.log(pagedData);
    });
  }

  ngAfterViewInit(): void {
    this.columns = [
      {name: 'Case Title', prop: 'title'},
      {name: 'Location of Incidence', prop: 'location'},
      {name: 'Date of incidence', prop: 'dateOfIncidence'},
      {name: 'No of Victims', prop: 'numberOfVictims'},
      {name: 'No of suspects', prop: 'numberOfSuspects'},
      {name: 'Actions', prop: 'id', cellTemplate: this.buttonsTemplate}];
    this.setPage({offset: this.page.pageNumber});
    this.cdr.detectChanges();
  }

  delete(id: number) {
    if (!confirm('Are you sure you want to delete this report?')) {
      return;
    }
    this.criminalCaseService.deleteReport(id)
      .subscribe(value => {
        this.toastrService.success('You have successfully deleted the report', 'Success', {timeOut: 800})
          .onHidden.subscribe(value1 => {
          location.reload();
        });
      }, error => {
        this.toastrService.error('An internal server error occurred.', 'Error', {timeOut: 800});
      }, () => {
        console.log('complete');
      });
  }
}
