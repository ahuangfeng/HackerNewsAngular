import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../providers/http.service";
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contribution } from '../../model/contribution';


@Component({
  selector: 'app-full-contribution',
  templateUrl: './full-contribution.component.html',
  styleUrls: ['./full-contribution.component.css']
})
export class FullContributionComponent implements OnInit {

  comments = [];
  errorMessage;
  contribution: Contribution;

  commentForm = new FormGroup({
    body: new FormControl('', Validators.required),
  });

  currentID;
  
  constructor(private route: ActivatedRoute,private httpService: HttpService, private router: Router) {
    this.currentID = this.getContributionId();
    this.getContribution(this.currentID);
  }

  ngOnInit() {
  }

  getContribution(id){
    this.httpService.getContribution(id).then(data => {
      console.log("DATA:", data);
      this.contribution = new Contribution(data['contribution']);
      return this.httpService.getComments(id);
    }).then(comments => {
      console.log("comments:", comments);
      this.comments = comments['comments'];
    }).catch(err => {
      this.errorMessage = err.error.message;
    });
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

  getContributionId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

}
