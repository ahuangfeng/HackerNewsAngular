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
  constructor(private httpService: HttpService) { }

  
  ngOnInit() {
    this.httpService.getUser("1").then(data => {
      console.log("data", data);
      this.user = data['user'];
    }).catch(err => {
      console.log("error:", err);
    })
  }

}
