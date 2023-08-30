import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../SERVICES/authguard.service';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private authgurads: AuthguardService, private router: Router) { }
  canActivate(): boolean {
    if (!this.authgurads.getToken()) {
      alert('Authentication Failed, Please Login again!!.. ');
      this.router.navigate(['/login']);
    }
    return this.authgurads.getToken();
  }

}