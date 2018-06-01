import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { credentials } from './credentials';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  private getHeaders() {
    var token = credentials.getToken();
    var httpOptions;
    if (token) {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': credentials.getToken()
        })
      };
    } else {
      httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    }
    return httpOptions;
  }

  getContributions() {
    return this.http.get(environment.apiServer + 'contributions', this.getHeaders()).toPromise();
  }

  getNewContributions() {
    return this.http.get(environment.apiServer + 'contributions?type=new', this.getHeaders()).toPromise();
  }

  getAskContributions() {
    return this.http.get(environment.apiServer + 'contributions?type=ask', this.getHeaders()).toPromise();
  }

  postNewContributions(title, url, text) {
    var body = {title: title};
    if(url == undefined){
      body['text'] = text;
    }else{
      body['url'] = url;
    }
    return this.http.post(environment.apiServer + 'contributions', body, this.getHeaders()).toPromise();
  }

  getComments(contribution_id) {
    return this.http.get(environment.apiServer + 'contributions/' + contribution_id + '/comments', this.getHeaders()).toPromise();
  }

  postComment(contribution_id, comment) {
    return this.http.post(environment.apiServer + 'contributions/' + contribution_id + '/comments', {body: comment}, this.getHeaders()).toPromise();

  }

  login(provider, uid, nickname, token, secret) {
    var body = { provider: provider, uid: uid, nickname: nickname, token: token, secret: secret };
    return this.http.post(environment.apiServer + 'login', body, this.getHeaders()).toPromise();
  }

  getUser(user_id) {
    return this.http.get(environment.apiServer + 'users/' + user_id, this.getHeaders()).toPromise();
  }

  getThreads(user_id) {
    return this.http.get(environment.apiServer + 'users/' + user_id +'/comments', this.getHeaders()).toPromise();
  }

}
