import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../providers/http.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-full-contribution',
  templateUrl: './full-contribution.component.html',
  styleUrls: ['./full-contribution.component.css']
})
export class FullContributionComponent implements OnInit {

  comments;
  body;
  errorMessage;

  //TODO: no compila amb l'html i s'hauria de fer amb reactive forms
  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.httpService.getComments("4").then(data => {
      console.log("data", data['comments']);
      this.comments = data['comments'];

    }).catch(err => {
      console.log("error:", err);
    })
  }

  changeBody(newValue) {
    this.body = newValue;
  }

  createComment() {

    let body;
    if (this.body === undefined) {
      body = undefined;
    }
    else {
      body = this.body.target.value;
    }

    this.httpService.postComment("4", body).then(data => {
      console.log(data)
      location.reload();

    }).catch(err => {
      this.errorMessage = err.error.message;
      document.getElementById("p").style.visibility = "visible";
    })


  }


}
