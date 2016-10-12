import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  popup: FirebaseObjectObservable<any>;
  isOn: boolean;
  isLoggedIn: boolean = false;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => { 
        console.log('auth ', auth);
        this.isLoggedIn = auth && auth.uid ? true : false;
    });      
    this.popup = af.database.object('/popup');
    this.isOn = false;
  }

  login(username, pass):void {
    this.af.auth.login({
    email: username,
    password: pass,
    });
  }

  logout():void {
    this.af.auth.logout();
  }

  update(enabled: string, text: string) {
    console.debug('updating ', enabled, text);
    this.popup.update({ enable: enabled, text: text });
  }
}