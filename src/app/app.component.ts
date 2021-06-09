import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  @Input() sideBarStatus: boolean;

  @Input() isLoggedIn: boolean;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.authService.setSideBarStatus.subscribe(value => {
      this.sideBarStatus = value;
    });
  }
}

