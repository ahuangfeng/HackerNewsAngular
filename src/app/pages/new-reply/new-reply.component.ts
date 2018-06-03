import { Component, OnInit } from '@angular/core';
import {Comment} from "../../model/comment";
import {HttpService} from "../../providers/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-reply',
  templateUrl: './new-reply.component.html',
  styleUrls: ['./new-reply.component.css']
})
export class NewReplyComponent implements OnInit {

  errorMessage;
  comment: Comment;
  contributionId;
  commentId;

  replyForm = new FormGroup({
    reply: new FormControl('', Validators.required)
  });

  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.contributionId = this.getContributionId();
    this.commentId = this.getCommentId();
    this.getCommentById(this.contributionId,this.commentId);
  }

  ngOnInit() {
  }

  getContributionId(): string {
    return this.route.snapshot.paramMap.get('contribution_id');
  }

  getCommentId(): string {
    return this.route.snapshot.paramMap.get('id');
  }

  getCommentById(contributionId, commentId) {
    this.httpService.getCommentById(contributionId,commentId).then(data => {
      this.comment = new Comment(data['comment']);
      console.log("getComment:", data);
    }).catch(err => {
      this.errorMessage = err.error.message;
    });
  }

  createReply() {
    if (!this.replyForm.valid) {
      this.errorMessage = "You must enter a reply."
    } else {
      this.httpService.postReply(this.contributionId, this.commentId, this.replyForm.value.reply).then(data => {
        this.router.navigateByUrl('/contribution/'+ this.contributionId);
      }).catch(err => {
        this.errorMessage = err.error.message;
      });
    }
  }

}
