import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  comments = [];
  constructor(private httpService: HttpService, private authService: AuthService) { }

  getThreads() {
    this.httpService.getThreads(this.authService.currentUserID).then(data => {
      console.log("getThreads", data);
      this.comments = data['comments'];
    }).catch(err => {
      console.log("error:", err);
    });
  }
}
