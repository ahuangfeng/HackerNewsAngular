import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private credentials = undefined;

  constructor(public afAuth: AngularFireAuth) { 
    var token = localStorage.getItem('access_token');
    if(token){
      this.credentials = token;
    }
  }

  setCredentials(credentials){
    this.credentials = credentials.accessToken;
    localStorage.setItem('access_token', credentials.accessToken);
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  logout(){
    this.credentials = undefined;
    localStorage.removeItem('access_token');
  }

  isLoggedIn() {
    // console.log("Is logged in?", this.credentials != undefined);
    return this.credentials != undefined;
  }
}
