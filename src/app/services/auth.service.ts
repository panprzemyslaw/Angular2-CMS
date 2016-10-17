import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router: Router, public af: AngularFire) {      
    this.af.auth.subscribe(auth => { 
        console.log('auth ', auth);
    });      
  }

  login(username, pass): void {
    this.af.auth.login({
    email: username,
    password: pass,
    });
    this.router.navigate(['info']);     
  }

  logout(): void {
    this.router.navigate(['login']);      
    this.af.auth.logout();
  }
 
}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
