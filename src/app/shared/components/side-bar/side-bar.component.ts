import {Component, Input, OnInit} from '@angular/core';
import {faChartLine, faFileAlt, faHome, faListAlt, faPlus, faUserCircle} from '@fortawesome/free-solid-svg-icons';

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

  @Input() sideBar: boolean;
  @Input() loginStatus: boolean;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.sideBar);
  }

}
