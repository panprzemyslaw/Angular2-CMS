import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import {
  RouterModule,
  Router,
  Routes
} from '@angular/router';

/*
 * Services
 */
import {AUTH_PROVIDERS} from './services/auth.service';
import {LoggedInGuard} from './guards/loggedIn.guard';

/*
* Components
*/
import { AppComponent } from './components/app/app.component';
import { ParmaInfoComponent } from './components/parma-info-box/parma-info-box.component';
import { ParmaMenuComponent } from './components/parma-menu/parma-menu.component';
import { ParmaPromoComponent } from './components/parma-promo/parma-promo.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { LogoutBoxComponent } from './components/logout-box/logout-box.component';
import { NavigationComponent } from './components/navigation/navigation.component';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyANrDBpvXTJuJIi8TaZTuS3ORJu5Ydl7NI',
  authDomain: 'parma-admin.firebaseapp.com',
  databaseURL: 'https://parma-admin.firebaseio.com',
  storageBucket: 'parma-admin.appspot.com'
};

const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password,
}

const routes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  { path: 'login', component: LoginBoxComponent},  
  { path: 'info', component: ParmaInfoComponent, canActivate: [LoggedInGuard] },
  { path: 'menu', component: ParmaMenuComponent, canActivate: [LoggedInGuard] },
  { path: 'promocje', component: ParmaPromoComponent, canActivate: [LoggedInGuard] }    
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig),
    RouterModule.forRoot(routes) // <-- routes    
  ],
  declarations: [ 
    AppComponent, 
    LoginBoxComponent, 
    LogoutBoxComponent,
    ParmaInfoComponent,
    ParmaPromoComponent,
    ParmaMenuComponent,
    NavigationComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    AUTH_PROVIDERS,
    LoggedInGuard,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ]  
})
export class AppModule {}
