import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  isEmptyVal(val: any) {
    if (val == 'undefined' || val == undefined || val == '' || val == 'null' || val == null) {
      return true;
    } else {
      return false;
    }
  }
}
