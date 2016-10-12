import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule, AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

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

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
