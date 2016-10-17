import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFire } from 'angularfire2';
import {Observable} from 'rxjs';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private router: Router, public af: AngularFire) {}

  canActivate() {
        console.debug('canActivate ');

        return this.af.auth

        // Observables returned by canActivate have to complete, so take the
        // first emitted value from the auth observable.

        .first()

        // Use mergeMap to project the values emitted from the inner
        // observables created using Observable.fromPromise and
        // Observable.of. 

        .mergeMap((user) => {
        if (user && user.auth) {
            return Observable.of(true);
        } else {
            this.router.navigate(['login']);            
            return Observable.of(false);
        }
        });
  
    }
}