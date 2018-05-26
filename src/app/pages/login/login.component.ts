import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.login();
  }
  
  login() {
    this.afAuth.auth.signInWithPopup(new auth.TwitterAuthProvider()).then(callback => {
      console.log("callback:", callback);
    }).catch(err => {
      console.log("EROO:", err);
    }); 
  }

}
