import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as moment from 'moment';
import {FormBuilder} from '@angular/forms';
import {CriminalCaseService} from '../../services/criminal-case.service';
import {ToastrService} from 'ngx-toastr';
import {Page} from '../../model/page.model';
import {IncidenceReportResponse} from '../../model/criminal-case.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit, AfterViewInit {

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  page = new Page();
  rows = Array<IncidenceReportResponse>();
  @ViewChild('counter') counter: ElementRef;
  monthsDataCount: Array<number> = [];

  public barChartLabels: Array<string> = [];
  public barChartColor: any[] = [{backgroundColor: ['#60A3D9', '#60A3D9', '#60A3D9', '#60A3D9', '#60A3D9', '#60A3D9', '#60A3D9', '#60A3D9', '#60A3D9', '#60A3D9', '#60A3D9', '#60A3D9']}];
  public barChartType = 'bar';
  public barChartLegend = true;
  public chartColors: any[] = [{
      backgroundColor: ['#FF7360', '#60A3D9', '#F08080', '#BDB76B']
    }];

  public barChartData = [
    {data: [], label: 'Reported Cases'}
  ];

  public pieChartLabels = ['Reported Cases Q1', 'Reported Cases Q2', 'Reported Cases Q3', 'Reported Cases Q4'];
  public pieChartData = [];
  public pieChartType = 'pie';

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
    this.getMonths();
  }

  getMonths() {
    const months = moment.monthsShort();
    months.forEach(month => this.barChartLabels.push(month));
  }

  setPage(pageInfo) {
    this.page.pageNumber = pageInfo.offset;
    this.search(this.page);
  }

  search(page: Page) {
    this.criminalCaseService.getResults(page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData[`results`];
      this.rows.forEach(response => {
        this.monthsDataCount.push(moment(response.dateOfIncidence).month());
      });
      this.reportCounter(this.page.totalElements);
      this.barChartDataFeed();
      this.pieChartDataFeed();
      console.log(this.pieChartData);
    });
  }

  reportCounter(totalElements: number) {
    let current = this.counter.nativeElement.innerText;
    const int = setInterval(() => {
      current = Number(current);
      current++;
      if (current === totalElements) {
        clearInterval(int);
      }
      this.counter.nativeElement.innerText = current;
    }, 100);
  }

  ngAfterViewInit(): void {
    this.setPage({offset: this.page.pageNumber});
  }

  private barChartDataFeed() {
    const sortedArr = this.monthsDataCount.sort();
    for (let i = 0; i < 12; i++) {
      this.barChartData[0].data.push(sortedArr.filter(x => x === i).length);
    }
  }

  private pieChartDataFeed() {
    let value = 0;
    const sortedArr = this.monthsDataCount.sort();
    for (let i = 0; i < 4; i++) {
      for (let j = i * 3; j < (i * 3) + 3; j++) {
        value += sortedArr.filter(x => x === j).length;
      }
      this.pieChartData.push(value);
      value = 0;
    }
  }
}
