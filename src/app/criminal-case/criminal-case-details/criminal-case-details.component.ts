import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CriminalCaseService} from '../../services/criminal-case.service';
import {CriminalCase} from '../../model/criminal-case.model';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-criminal-case-details',
  templateUrl: './criminal-case-details.component.html',
  styleUrls: ['./criminal-case-details.component.css']
})
export class CriminalCaseDetailsComponent implements OnInit {

  incidenceReport: CriminalCase;
  editIcon = faEdit;
  incidenceReportId: number;

  constructor(
    private route: ActivatedRoute,
    private criminalCaseService: CriminalCaseService
  ) {
    this.incidenceReport = new CriminalCase();
  }

  ngOnInit(): void {
    this.route.params.subscribe(v => {
      if (v && v.id) {
        this.incidenceReportId = v.id;
        this.getDetails(v.id);
      } else {
        // this.goBack();
      }
    });
  }

  getDetails(id: number) {
    this.criminalCaseService.getIncidenceReport(id)
      .subscribe(response => {
        this.incidenceReport = response;
      }, e => {
        console.log(e);
      });
  }

}
