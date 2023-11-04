import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Login } from './global-login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) {}

  

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    if (Login.isLogedin) {
      const allowedRoutes = ['dashboard', 'products', 'orders', 'error', 'login'];
      if (allowedRoutes.includes(next.routeConfig?.path || '')) {
        return true;
      } else {
        return this.router.parseUrl('/dashboard'); 
      }
    } else if (Login.isAdmin) {    
      return true;
    } else {
      const allowedRoutes = ['dashboard', 'products', 'makeorder', 'error', 'login'];
      if (allowedRoutes.includes(next.routeConfig?.path || '')) {
        return true;
      } else {
        return this.router.parseUrl('/dashboard'); 
      }
    }
  }
}
