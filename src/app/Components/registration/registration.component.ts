import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Register } from 'src/app/MODEL/register';
import { SharedService } from 'src/app/SERVICES/shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registers: Register[] = [];
  register: Register = new Register();

  firstname_ = '';
  username = '';
  password = '';
  errorMsg: string = '';
  successMsg: string = '';
  constructor(private shared_service: SharedService) {

  }
  addUsers(register: any) {
    this.firstname_ = this.register.firstname;
    this.username = this.register.username;
    this.password = this.register.password;
    console.log('add users', register);
    if (this.shared_service.isEmptyVal(register.firstname) || this.shared_service.isEmptyVal(register.username)
      || this.shared_service.isEmptyVal(register.password)) {
      this.errorMsg = "Fields can't be blank";
      this.successMsg = '';
    } else {
      console.log('ELSE==>');

      this.errorMsg = "";

      this.shared_service.registerUsersList(register)
        .subscribe(res => {
          this.successMsg = "Rigistration Successfully";

        }, error => {
          this.errorMsg = 'Registration Failled';

        }
        );
    }


  }
}