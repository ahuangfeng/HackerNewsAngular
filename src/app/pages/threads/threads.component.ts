import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  comments = [];
  constructor(private httpService: HttpService, private authService: AuthService) { }

  ngOnInit() {
    this.httpService.getThreads(this.authService.currentUserID).then(data => {
      console.log("data", data);
      this.comments = data['comments'];
    }).catch(err => {
      console.log("error:", err);
    });
  }
}
