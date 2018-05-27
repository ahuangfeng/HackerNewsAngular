import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials;

  constructor(public afAuth: AngularFireAuth) { }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider()).then(callback => {
      console.log("callback:", callback);
      this.credentials = callback;
    }).catch(err => {
      console.log("EROO:", err);
    }); 
  }
}
