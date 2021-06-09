import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

    sideBarToggle: boolean;

    constructor(
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
    }

    sendSideBarStatus() {
        this.sideBarToggle = !this.sideBarToggle;
        this.authService.setSideBarStatus.next(this.sideBarToggle);
    }
}
