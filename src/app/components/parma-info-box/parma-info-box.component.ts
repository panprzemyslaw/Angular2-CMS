import { Component } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

/*
 * Services
 */
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'parma-info',
  templateUrl: 'parma-info-box.component.html',
  styleUrls: ['parma-info-box.component.css']
})
export class ParmaInfoComponent {

  popup: FirebaseObjectObservable<any>;
  isOn: boolean;
  content: string;

  constructor(public af: AngularFire, public authService: AuthService) {   
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

  update(text: string) {
    console.debug('updating ', this.isOn, text);
    this.popup.update({ enable: this.isOn, text: text });
  }
}