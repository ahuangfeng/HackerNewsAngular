import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../providers/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Comment} from "../../model/comment";

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  errorMessage;
  commentId;
  contributionId;

  editForm = new FormGroup({
    comment: new FormControl('', Validators.required)
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
      var comment = new Comment(data['comment']);
       console.log("getComment:", data);
      this.editForm.patchValue({ comment: comment.body });
    }).catch(err => {
      this.errorMessage = err.error.message;
    });
  }

  editComment() {
    if (!this.editForm.valid) {
      this.errorMessage = "You must enter a comment.";
      return;
    } else {
      this.httpService.editComment(this.contributionId, this.commentId, this.editForm.value.comment).then(data => {
        this.router.navigateByUrl('/contribution/'+ this.contributionId);
      }).catch(err => {
        this.errorMessage = err.error.message;
      });
    }
  }

}
