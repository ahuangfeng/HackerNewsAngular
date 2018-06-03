import {Component, Input, OnInit} from '@angular/core';
import { Comment } from '../../model/comment';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';
import { HttpService } from '../../providers/http.service';
import { ThreadsService } from '../../providers/threads.service';


@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss']
})
export class SingleCommentComponent implements OnInit {

  @Input() comment: any;

  commentShow: Comment;
  deleted = false;

  constructor(private authService: AuthService, private router: Router, private httpService:HttpService, public threadsService:ThreadsService) { }

  ngOnInit() {
    this.commentShow = new Comment(this.comment);
  }

  me(){
    this.router.navigateByUrl('/user/'+this.authService.currentUserID);
  }


  ownComment(){
    return this.authService.currentUserID == this.commentShow.user_id;
  }

  edit(){
    console.log("TODO: Edit!", this.commentShow.id);
  }

  delete(){
    this.httpService.deleteComment(this.commentShow.contribution_id,this.commentShow.id).then(data => {
      console.log("deleted", data);
      this.threadsService.getThreads();
      this.deleted = true;
    }).catch(this.handleError);
  }

  update(){
    this.httpService.getCommentById(this.commentShow.contribution_id,this.commentShow.id).then(data => {
      this.commentShow = new Comment(data['comment']);
    }).catch(this.handleError);
  }

  vote(){
    this.httpService.voteComment(this.commentShow.contribution_id,this.commentShow.id).then(data => {
      console.log("Voted:", data);
      this.update();
    }).catch(this.handleError);
  }

  unvote(){
    this.httpService.unvoteComment(this.commentShow.contribution_id,this.commentShow.id).then(data => {
      console.log("Unvoted:", data);
      this.update();
    }).catch(this.handleError);
  }

  handleError(err){
    console.error("Error:", err);
  }

}
