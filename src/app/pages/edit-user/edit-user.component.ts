import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpService } from '../../providers/http.service';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  errorMessage;
  currentUserID;

  editUserForm = new FormGroup({
    email: new FormControl(''),
    about: new FormControl(''),
  });
  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router, public authService: AuthService) {
    this.currentUserID = this.getUserId();
    this.getUserInfo(this.currentUserID);
    if (this.authService.currentUserID != this.currentUserID) {
      this.router.navigateByUrl('user/' + this.currentUserID);
    }
  }

  ngOnInit() {
  }

  getUserInfo(id) {
    this.httpService.getUser(id).then(data => {
      // console.log("Data:", data['user']);
      if (data['user'].email) {
        this.editUserForm.patchValue({ email: data['user'].email });
      }
      if (data['user'].about) {
        this.editUserForm.patchValue({ about: data['user'].about });
      }
    }).catch(err => {
      this.errorMessage = err.error.message;
    });
  }

  getUserId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  editUser() {
    if (this.editUserForm.value.email != "") {
      if (this.validateEmail(this.editUserForm.value.email)) {
        console.log("VAlid");
        this.saveChanges(this.currentUserID, this.editUserForm.value.email, this.editUserForm.value.about);
      } else {
        this.errorMessage = "This email is invalid.";
      }
    } else {
      this.saveChanges(this.currentUserID, this.editUserForm.value.email, this.editUserForm.value.about);
    }
  }

  saveChanges(id, email, about) {
    this.httpService.editUser(id, email, about).then(data => {
      console.log("DAta:", data);
      this.router.navigateByUrl('user/' + this.currentUserID);
    }).catch(err => {
      this.errorMessage = err.error.message;
    });
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }


}
