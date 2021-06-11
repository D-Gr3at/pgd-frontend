import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {Login} from '../../model/login.model';
import {ToastrService} from 'ngx-toastr';
import {CustomError} from '../../model/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  faLogout = faSignInAlt;
  login = new Login();
  loading: boolean;
  error = new CustomError();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastrService: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  doLogin() {
    this.login.email = this.email.value;
    this.login.password = this.password.value;
    this.loading = true;
    this.authService.login(this.login).subscribe(() => {
      this.loading = false;
      this.router.navigate(['dashboard']);
    }, (error) => {
      // console.log(error.error);
      this.loading = false;
      if ( error.error.error !== null) {
        this.error = error.error;
        // console.log(this.error);
        this.toastrService.error(this.error.error, this.error.title);
      }
    });
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }
}
