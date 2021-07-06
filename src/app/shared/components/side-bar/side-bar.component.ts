import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {faChartLine, faFileAlt, faHome, faListAlt, faPlus, faUserCircle} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  dashboard = faHome;
  reports = faFileAlt;
  reportList = faListAlt;
  addReport = faPlus;
  analytics = faChartLine;
  faUser = faUserCircle;
  imgSize = 20;
  @Output() toggleSideBar: EventEmitter<boolean> = new EventEmitter<boolean>();

  sideBar: boolean;
  @Input() loginStatus: boolean;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.setSideBarStatus.subscribe(value => {
      this.sideBar = value;
    });
  }

}
