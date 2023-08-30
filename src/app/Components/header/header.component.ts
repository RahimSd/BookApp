import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  sessionUser = JSON.parse(localStorage.getItem("SessionUser") || '{}');

  constructor(private router: Router) {

  }
  ngOnInit() {

  }
  logout() {
    if (localStorage.getItem("SessionUser")) {
      localStorage.removeItem('SessionUser');
      localStorage.clear();
      this.router.navigate(['/login'])
    }
  }
}
