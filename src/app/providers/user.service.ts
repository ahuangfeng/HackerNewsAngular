import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userShow: User;
  constructor(private httpService: HttpService) { }

  getUser(id){
    this.httpService.getUser(id).then(data => {
      console.log("data", data);
      this.userShow = data['user'];
    }).catch(err => {
      console.log("error:", err);
    });
  }
}
