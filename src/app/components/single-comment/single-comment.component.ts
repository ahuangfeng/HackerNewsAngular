import {Component, Input, OnInit} from '@angular/core';
import { Comment } from '../../model/comment';
import { AuthService } from '../../providers/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.scss']
})
export class SingleCommentComponent implements OnInit {

  @Input() comment: any;

  commentShow: Comment;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.commentShow = new Comment(this.comment);
  }

  me(){
    // TODO: si hi ha un /user/1, i faig el meu user no funciona
    this.router.navigateByUrl('/user/'+this.authService.currentUserID);
  }

  vote(){
    console.log("TODO: vote:", this.comment.id);
  }

  unvote(){
    console.log("TODO: unvote:", this.comment.id);
  }

}
