import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { Router } from '@angular/router';
import { UserService } from './providers/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService, private router: Router, public userService:UserService){

  }

  login(){
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/main');
    }else{
      this.authService.login().then(callback => {
        console.log("callback:", callback);
        var provider = callback.additionalUserInfo.providerId;
        var uid = callback.user.uid;
        var nickname = callback.additionalUserInfo.username;
        var token = callback.credential.accessToken;
        var secret = callback.credential.secret; //provider, uid, nickname, token, secret
        return this.authService.loginToOurServer(provider, uid, nickname, token, secret);
      }).then(userConnected => {
        this.authService.setCredentials(userConnected['user']);
        // TODO: mirar si es pot fer sense refresh... Puto Angular6, no funciona com el 5....xD
        window.location.reload();
      }).catch(err => {
        console.log("Error:", err);
      });
    }
  }

  me(){
    this.userService.getUser(this.authService.currentUserID);
    this.router.navigateByUrl('/user/'+this.authService.currentUserID);
  }

  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/main');
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  submit(){
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/submit');
    }else{
      this.authService.login().then(callback => {
        var provider = callback.additionalUserInfo.providerId;
        var uid = callback.user.uid;
        var nickname = callback.additionalUserInfo.username;
        var token = callback.credential.accessToken;
        var secret = callback.credential.secret; //provider, uid, nickname, token, secret
        return this.authService.loginToOurServer(provider, uid, nickname, token, secret);
      }).then(userConnected => {
        this.authService.setCredentials(userConnected['user']);
        this.router.navigateByUrl('/submit');
        // TODO: mirar si es pot fer sense refresh... Puto Angular6, no funciona com el 5....xD
        window.location.reload();
      }).catch(err => {
        console.error("Error: ", err);
      });
    }
  }

}
