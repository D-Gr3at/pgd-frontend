import {Injectable} from '@angular/core';
import {Page} from '../model/page.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CriminalCase, IncidenceReportResponse, PagedData} from '../model/criminal-case.model';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CriminalCaseService {


  constructor(
    private httpClient: HttpClient
  ) {
  }

  env = environment;

  getPagedData(page: Page, data: IncidenceReportResponse[], total: number): PagedData<IncidenceReportResponse> {
    const pagedData = new PagedData<IncidenceReportResponse>();
    page.totalElements = total;
    page.totalPages = Math.ceil(page.totalElements / page.size);
    data.forEach(d => {
      d.dateOfIncidence = moment(d.dateOfIncidence).subtract(1 , 'month').format('LLLL');
    });
    pagedData.results = data;
    pagedData.page = page;
    return pagedData;
  }

  getResults(page: Page): Observable<PagedData<IncidenceReportResponse>> {
    let param: any;
    if (page.incidence) {
      // console.log(page.incidence);
      param = new HttpParams({
        fromString: `incidence=${page.incidence}&offset=${page.pageNumber * page.size}&limit=${page.size}`
      });
    } else {
      param = new HttpParams({
        fromString: `offset=${page.pageNumber * page.size}&limit=${page.size}`
      });
    }
    return this.httpClient
      .get<IncidenceReportResponse[]>(this.env.baseUrl + '/incidence-report', {params: param, withCredentials: false})
      .pipe(map(d => this.getPagedData(page, d[`results`], d[`total`])));
  }

  createIncidenceReport(incidenceReport: CriminalCase): Observable<any> {
    return this.httpClient.post<any>(this.env.baseUrl + '/incidence-report/create', incidenceReport);
  }

  getIncidenceReport(id: number): Observable<CriminalCase> {
    return this.httpClient.get<CriminalCase>(this.env.baseUrl + `/incidence-report/${id}`)
      .pipe(map(d => this.getReportData(d)));
  }

  private getReportData(data: CriminalCase): CriminalCase {
    data.dateOfIncidence = moment(data.dateOfIncidence).format('LLLL');
    if (data.suspects.length > 0) {
      const suspects = data.suspects;
      suspects.map((suspect, index) => {
        // console.log(suspect.dateOfBirth);
        suspects[index].dateOfBirth = moment(suspect.dateOfBirth).format('MM/DD/YYYY');
      });
      data.suspects = suspects;
    }
    if (data.victims.length > 0) {
      const victims = data.victims;
      victims.map((victim, index) => {
        victims[index].dateOfBirth = moment(victim.dateOfBirth).format('MM/DD/YYYY');
      });
      data.victims = victims;
    }
    return data;
  }

  updateReport(incidenceReport: CriminalCase): Observable<any> {
    return this.httpClient.patch(this.env.baseUrl + `/incidence-report/${incidenceReport.id}`, incidenceReport);
  }

  deleteReport(id: number): Observable<any> {
    return this.httpClient.delete(this.env.baseUrl + `/incidence-report/${id}`);
  }
}
