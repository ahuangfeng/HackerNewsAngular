import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../providers/http.service";

@Component({
  selector: 'app-full-contribution',
  templateUrl: './full-contribution.component.html',
  styleUrls: ['./full-contribution.component.css']
})
export class FullContributionComponent implements OnInit {

  comments;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getComments("4").then(data => {
      console.log("data", data['comments']);
      this.comments = data['comments'];

    }).catch(err => {
      console.log("error:", err);
    })
  }

}
