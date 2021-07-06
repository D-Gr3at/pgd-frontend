import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-dashboardhome',
  templateUrl: './dashboardhome.component.html',
  styleUrls: ['./dashboardhome.component.css']
})
export class DashboardhomeComponent implements OnInit {

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
