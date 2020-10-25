import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard  {

  constructor(private router : Router){}

  canActivate() {
      const isLoggedIn = localStorage.getItem('isLoggedIn');
      if(isLoggedIn === "true"){
        return true;
      }
      this.router.navigateByUrl('/admin');
      return false;
  }

}
