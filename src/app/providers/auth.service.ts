import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private credentials = undefined;

  constructor(public afAuth: AngularFireAuth, public httpService:HttpService) { 
    var token = localStorage.getItem('access_token');
    if(token){
      this.credentials = token;
    }
  }

  setCredentials(token){
    this.credentials = token;
    localStorage.setItem('access_token', token);
  }

  login() {
    return this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider());
  }

  loginToOurServer(provider, uid, nickname, token, secret){
    return this.httpService.login(provider, uid, nickname, token, secret);
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
