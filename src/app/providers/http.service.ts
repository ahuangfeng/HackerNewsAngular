import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
// import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

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

}
