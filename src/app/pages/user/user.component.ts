import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/providers/http.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() user: User;
  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.httpService.getUser(this.getUserId()).then(data => {
      console.log("data", data);
      this.user = data['user'];
    }).catch(err => {
      console.log("error:", err);
    })
  }

  getUserId(): string{
    return this.route.snapshot.paramMap.get('id');
  }
}
