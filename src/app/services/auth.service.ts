import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class AuthService {
  isLoggedIn: boolean;
  constructor(public af: AngularFire) {
    this.isLoggedIn = false;      
    this.af.auth.subscribe(auth => { 
        console.log('auth ', auth);
        this.isLoggedIn = auth && auth.uid ? true : false;
    });      
  }

  login(username, pass): void {
    this.af.auth.login({
    email: username,
    password: pass,
    });
  }

  logout(): void {
    this.af.auth.logout();
  }

  isUserLoggedIn(): boolean {
    return this.isLoggedIn;
  }  
}

export var AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
