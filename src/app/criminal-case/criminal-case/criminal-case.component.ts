import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-criminal-case',
  templateUrl: './criminal-case.component.html',
  styleUrls: ['./criminal-case.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class CriminalCaseComponent implements OnInit {

  sideBar: boolean;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.setSideBarStatus.subscribe(value => {
      this.sideBar = value;
    });
  }

}
