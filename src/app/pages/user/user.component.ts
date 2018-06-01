import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from 'src/app/providers/http.service';
import { User } from '../../model/user';
import { AuthService } from '../../providers/auth.service';
import { UserService } from '../../providers/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private route: ActivatedRoute, public authService: AuthService, private userService:UserService) { }

  ngOnInit() {
    this.userService.getUser(this.getUserId());
  }

  getUserId(): string {
    return this.route.snapshot.paramMap.get('id');
  }
}
