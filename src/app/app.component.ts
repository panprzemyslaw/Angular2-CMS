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
  content: string;
  isLoggedIn: boolean = false;
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => { 
        console.log('auth ', auth);
        this.isLoggedIn = auth && auth.uid ? true : false;
    });      
    this.popup = af.database.object('/popup', { preserveSnapshot: true });
    this.popup.subscribe(snapshot => {
      this.isOn = snapshot.val().enable;
      this.content = snapshot.val().text;
      console.log('isOn ', this.isOn);
      console.log('text', this.content);            
    });    
    console.debug('popup ', this.popup);
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

  update(text: string) {
    console.debug('updating ', this.isOn, text);
    this.popup.update({ enable: this.isOn, text: text });
  }
}