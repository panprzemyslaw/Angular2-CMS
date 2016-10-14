import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(): boolean {
    console.debug('canActivate ', this.authService.isUserLoggedIn());
    return this.authService.isUserLoggedIn();
  }
}