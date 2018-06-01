import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../providers/http.service";
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-full-contribution',
  templateUrl: './full-contribution.component.html',
  styleUrls: ['./full-contribution.component.css']
})
export class FullContributionComponent implements OnInit {

  comments;
  errorMessage;

  commentForm = new FormGroup({
    body: new FormControl('', Validators.required),
  });

  currentID = 4;
  
  constructor(private httpService: HttpService, private router: Router) {
    this.getComments(this.currentID);
  }

  ngOnInit() {
  }

  getComments(id) {
    this.httpService.getComments(id).then(data => {
      console.log("data", data['comments']);
      this.comments = data['comments'];
    }).catch(err => {
      console.log("error:", err);
      this.errorMessage = err.error.message;
    });
  }

  createComment() {
    console.log("Creating comment:", this.commentForm.value);
    if (this.commentForm.valid) {
      this.httpService.postComment(this.currentID, this.commentForm.value.body).then(data => {
        this.commentForm.patchValue({ body: "" });
        this.errorMessage = undefined;
        this.getComments(this.currentID);
      }).catch(err => {
        this.errorMessage = err.error.message;
      });
    } else {
      this.errorMessage = "The comment should not be empty.";
    }
  }


}
