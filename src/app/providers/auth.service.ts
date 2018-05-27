import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials = undefined;

  constructor(public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider()).then(callback => {
      console.log("callback:", callback);
      // TODO: guargar en localStorage: 'access_token'
      this.credentials = callback;
      console.log("CREDENTIALS:", this.credentials);
    }).catch(err => {
      console.log("EROO:", err);
    });
  }

  isLoggedIn() {
    // console.log("Is logged in?", this.credentials != undefined);
    return this.credentials != undefined;
  }
}
