import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
/*
 * Services
 */
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'logout-box',
  templateUrl: 'logout-box.component.html',
  styleUrls: ['logout-box.component.css']
})
export class LogoutBoxComponent {
    constructor(public authService: AuthService) {}   

  logout(): void {
    this.authService.logout();
  }    

}