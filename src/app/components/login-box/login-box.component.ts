import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
/*
 * Services
 */
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'login-box',
  templateUrl: 'login-box.component.html',
  styleUrls: ['login-box.component.css']
})
export class LoginBoxComponent {
    constructor(public authService: AuthService) {}   

  login(username: string, password: string): void {
    this.authService.login(username, password)
  }    

}