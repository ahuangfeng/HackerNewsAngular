import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'e6d4c8c9cb766bce8b273174ab379195'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  getContributions() {
    return this.http.get(environment.apiServer + 'contributions',httpOptions).toPromise();
  }

  getNewContributions(){
    return this.http.get(environment.apiServer + 'contributions?type=new',httpOptions).toPromise();
  }

  getAskContributions() {
    return this.http.get(environment.apiServer + 'contributions?type=ask',httpOptions).toPromise();
  }

  postNewContributions(title, url, text) {
    return this.http.post(environment.apiServer + 'contributions',{title, url, text}, httpOptions).toPromise();

  }

  getComments(contribution_id) {
    console.log(contribution_id);
    return this.http.get(environment.apiServer + 'contributions/' + contribution_id + '/comments',  httpOptions).toPromise();

  }



}
