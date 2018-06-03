import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ThreadsService {

  comments = [];
  constructor(private httpService: HttpService, private authService: AuthService) { }

  getThreads() {
    this.httpService.getThreads(this.authService.currentUserID).then(data => {
      console.log("getThreads", data);
      this.comments = data['comments'];
    }).catch(err => {
      console.log("error:", err);
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
}
