import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/SERVICES/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // reac6tive forms
  loginForm: FormGroup;
  errorMessage = '';
  successMessage = '';
  registrsData: any = [];
  constructor(private service: SharedService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      paasword: new FormControl(''),
    });

  }
  loginUser(data: any) {
    console.log('data login', data);
    if (this.service.isEmptyVal(data.username) || this.service.isEmptyVal(data.paasword)) {
      this.errorMessage = "Fileds can't be Blank";
      this.successMessage = '';

    } else {
      this.errorMessage = '';
      this.service.getregistrUsersList().
        subscribe(res => {
          console.log('login data list', res);
          this.registrsData = res;
          this.registrsData.filter((users: any) => {
            console.log('users List', users);
            if ((data.username == users.username) && (data.paasword == users.password)) {
              this.router.navigate(['/viewBooks'])
              localStorage.setItem("SessionUser", JSON.stringify(data));
            } else {
              this.errorMessage = 'Invalid credintials';

            }
          });
        });
    }
  }
  resetAll() {


    this.successMessage = '';
    this.errorMessage = '';
    this.loginForm.reset();

  }
}
