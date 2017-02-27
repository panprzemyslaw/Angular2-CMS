/*
 * Angular
 */
import {Component} from '@angular/core';
import { AngularFire, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'parma-promo',
  templateUrl: 'parma-promo.component.html',
  styleUrls: ['parma-promo.component.css']
})
export class ParmaPromoComponent {

  homePromo: FirebaseObjectObservable<any>;
  promos: FirebaseListObservable<any>;  
  homePromoContent: string;

  constructor(public af: AngularFire) {   
    this.homePromo = af.database.object('/homePromo', { preserveSnapshot: true });
    this.homePromo.subscribe(snapshot => {
      this.homePromoContent = snapshot.val().content;
      console.log('home promo content', this.homePromoContent);            
    },
    error => {
        console.log('Error reading home promo: ', error);         
    });    
    this.promos = af.database.list('/promos');    
  }

  update(homePromoInput: string) {
    console.debug('updating ', homePromoInput);
    this.homePromo.update({ content: homePromoInput});
  }

  addItem(newText: string) {
    this.promos.push({ text: newText });
  }

  updateItem(key: string, newText: string) {
    this.promos.update(key, { text: newText });
  }
  
  deleteItem(key: string) {    
    this.promos.remove(key); 
  }
  deleteEverything() {
    this.promos.remove();
  }

}

