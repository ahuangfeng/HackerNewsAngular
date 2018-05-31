import {Component, Input, OnInit} from '@angular/core';
import { Comment } from '../../model/comment';


@Component({
  selector: 'app-single-comment',
  templateUrl: './single-comment.component.html',
  styleUrls: ['./single-comment.component.css']
})
export class SingleCommentComponent implements OnInit {

  @Input() comment: any;

  commentShow: Comment;

  constructor() { }

  ngOnInit() {
    this.commentShow = new Comment(this.comment);
  }

}
