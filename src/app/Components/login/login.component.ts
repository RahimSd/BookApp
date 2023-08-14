import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
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
  constructor(private service: SharedService) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      paasword: new FormControl(''),
    });

  }
  loginUser(data: any) {
    console.log('Login form data', data);
    if (this.service.isEmptyVal(data.username) || this.service.isEmptyVal(data.paasword)) {
      this.errorMessage = "Fileds can't be Blank";
      this.successMessage = '';

    } else {
      this.successMessage = 'Success';
      this.errorMessage = '';

    }
  }
  resetAll() {


    this.successMessage = '';
    this.errorMessage = '';
    this.loginForm.reset();

  }
}
