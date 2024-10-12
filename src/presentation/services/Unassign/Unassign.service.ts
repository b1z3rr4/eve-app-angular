import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Auth/Auth.service';

@Injectable({
  providedIn: 'root'
})
export class UnassignService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (!this.authService.isLoggedIn()) {
      return true;
    }

    return this.router.parseUrl('');
  }
}
