import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import {
  Router
} from '@angular/router';

/*
 * Services
 */
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  popup: FirebaseObjectObservable<any>;
  isOn: boolean;
  content: string;
  constructor(public authService: AuthService, public router: Router) {}

  get isLoggedIn(): boolean {
    return this.authService.isUserLoggedIn();
  } 

}