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

  @Input() user: any;
  userRender:User;

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.user != undefined){
      // ja tindra un user ben format
      this.userRender = new User(this.user);
    }else{
      this.httpService.getUser(this.getUserId()).then(data => {
        console.log("data", data);
        this.userRender = data['user'];
      }).catch(err => {
        console.log("error:", err);
      });
    }
  }

  getUserId(): string{
    return this.route.snapshot.paramMap.get('id');
  }
}
