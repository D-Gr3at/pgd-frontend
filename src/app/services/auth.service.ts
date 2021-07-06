import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {LocalStorageService} from 'ngx-webstorage';
import {HttpClient} from '@angular/common/http';
import {Login, LoginResponse} from '../model/login.model';
import {map, tap} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  env = environment;

  setSideBarStatus = new Subject<boolean>();

  constructor(
    private httpClient: HttpClient,
    private localStorage: LocalStorageService
  ) { }

  login(loginData: Login): Observable<boolean> {
    return this.httpClient.post<LoginResponse>(this.env.baseUrl + '/auth/login', loginData)
      .pipe(map(response => {
        this.localStorage.store('token', response.token);
        this.localStorage.store('email', response.email);
        this.localStorage.store('expiresAt', response.expiresAt);
        this.localStorage.store('refreshToken', response.refreshToken);
        return true;
      }));
  }

  getJwtToken() {
    return this.localStorage.retrieve('token');
  }

  getRefreshToken() {
    return this.localStorage.retrieve('refreshToken');
  }

  getUsername() {
    return this.localStorage.retrieve('email');
  }

  isAuthenticated() {
    return !!this.getJwtToken();
  }

  refreshToken(): Observable<LoginResponse> {
    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      email: this.getUsername()
    };
    return this.httpClient.post<LoginResponse>(this.env.baseUrl + '/auth/refresh/token', refreshTokenPayload)
      .pipe(tap(response => {
        this.localStorage.store('token', response.token);
        this.localStorage.store('expiresAt', response.expiresAt);
      }));
  }

  logout() {
    this.httpClient.post(this.env.baseUrl + '/logout', null, {responseType: 'json'});
    this.localStorage.clear('token');
    this.localStorage.clear('email');
    this.localStorage.clear('expiresAt');
    this.localStorage.clear('refreshToken');
  }
}
