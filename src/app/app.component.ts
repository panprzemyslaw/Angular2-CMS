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
  constructor(af: AngularFire) {
    this.popup = af.database.object('/popup');
    this.isOn = false;
  }

  update(enabled: string, text: string) {
    console.debug('updating ', enabled, text);
    this.popup.update({ enable: enabled, text: text });
  }
}