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

  constructor(public afAuth: AngularFireAuth, public httpService:HttpService) { 
    var token = localStorage.getItem('access_token');
    if(token){
      credentials.setToken(token);
    }
  }

  setCredentials(token){
    credentials.setToken(token);
    localStorage.setItem('access_token', token);
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
  }

  isLoggedIn() {
    // console.log("Is logged in?", this.credentials != undefined);
    return credentials.getToken() != undefined;
  }
}
