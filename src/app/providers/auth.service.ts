import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { HttpService } from './http.service';
import { credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private credentials = undefined;
  currentUserID;

  constructor(public afAuth: AngularFireAuth, public httpService:HttpService) { 
    var token = localStorage.getItem('access_token');

    if(token){
      credentials.setToken(token);
    }
    this.currentUserID = localStorage.getItem("UserID");
  }

  getCurrentUserId(){
    return this.currentUserID;
  }

  setCredentials(userCredential){
    credentials.setToken(userCredential.api_key);
    localStorage.setItem('access_token', userCredential.api_key);
    this.currentUserID = userCredential.id;
    localStorage.setItem('UserID', userCredential.id);
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  loginToOurServer(provider, uid, nickname, token, secret){
    return this.httpService.login(provider, uid, nickname, token, secret);
  }

  logout(){
    credentials.setToken(undefined);
    localStorage.removeItem('access_token');
    this.currentUserID = undefined;
    localStorage.removeItem('UserID');
  }

  isLoggedIn() {
    // console.log("Is logged in?", this.credentials != undefined);
    return credentials.getToken() != undefined;
  }
}
