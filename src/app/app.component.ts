import { Component } from '@angular/core';
import { AuthService } from './providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService, private router: Router){

  }

  login(){
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/main');
    }else{
      this.authService.login().then(callback => {
        console.log("callback:", callback);
        this.authService.setCredentials(callback.credential);
        // TODO: mirar si es pot fer sense refresh... Puto Angular6, no funciona com el 5....xD
        // window.location.reload();
      }).catch(err => {
        console.log("Error:", err);
      });
    }
  }

  logout(){
    this.authService.logout();
  }

  isLoggedIn(){
    return this.authService.isLoggedIn();
  }

  submit(){
    if(this.authService.isLoggedIn()){
      this.router.navigateByUrl('/submit');
    }else{
      this.authService.login().then(callback => {
        this.authService.setCredentials(callback);
        this.router.navigateByUrl('/submit');
        // TODO: mirar si es pot fer sense refresh... Puto Angular6, no funciona com el 5....xD
        window.location.reload();
      }).catch(err => {
        console.error("Error: ", err);
      })
    }
  }
}
