import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../providers/http.service";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contribution } from '../../model/contribution';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../providers/auth.service';


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

  constructor(private route: ActivatedRoute, private httpService: HttpService, public authService:AuthService, private router: Router) {
    this.currentID = this.getContributionId();
    this.getContribution(this.currentID);
  }

  ngOnInit() {
  }

  delete(){
    this.httpService.deleteContribution(this.currentID).then(deleted => {
      this.router.navigateByUrl('/main');
    }).catch(err => {
      this.errorMessage = err.error.message;
    });
  }

  getContribution(id) {
    this.httpService.getContribution(id).then(data => {
      console.log("DATA:", data);
      this.contribution = new Contribution(data['contribution']);
      return this.httpService.getComments(id);
    }).then(comments => {
      console.log("comments:", comments);
      this.comments = this.buildTree(comments['comments']);
    }).catch(err => {
      this.errorMessage = err.error.message;
    });
  }

  getComments(id) {
    this.httpService.getComments(id).then(data => {
      console.log("data", data['comments']);
      this.comments = this.buildTree(data['comments']);
    }).catch(err => {
      console.log("error:", err);
      this.errorMessage = err.error.message;
    });
  }

  buildTree(comments: [any]) {
    var map = {}, node, roots = [], i;
    for (i = 0; i < comments.length; i += 1) {
      map[comments[i].id] = i; 
      comments[i].replies = []; 
    }
    for (i = 0; i < comments.length; i += 1) {
      node = comments[i];
      if (node.parent_id !== null) {
        comments[map[node.parent_id]].replies.push(node);
      } else {
        roots.push(node);
      }
    }
    return roots;
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
