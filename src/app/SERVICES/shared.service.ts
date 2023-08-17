import { Injectable } from '@angular/core';
import { Register } from '../MODEL/register';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  url = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  isEmptyVal(val: any) {
    if (val == 'undefined' || val == undefined || val == '' || val == 'null' || val == null) {
      return true;
    } else {
      return false;
    }
  }
  registerUsersList(registerData: Register): Observable<any> {
    // console.log('rigistreUsers List', registerData);
    return this.http.post(this.url + '/registerUsers', registerData);
  }
  getregistrUsersList(): Observable<any> {
    return this.http.get('http://localhost:3000/registerUsers');
  }
  getAuthorBooks(): Observable<any> {   // get to execute the observale subscribe
    return this.http.get(this.url + '/authorBooks')
  }
  getRecomndadeBooks(): Observable<any> {
    return this.http.get(this.url + '/recommendedBooks');
  }
}
