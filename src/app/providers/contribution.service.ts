import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  public mainContributions = [];
  public newContributions = [];
  public askContributions = [];

  updateCommentsSubject: Subject<any> = new Subject();
  updateContributionsSubject: Subject<any> = new Subject();

  constructor(private httpService: HttpService) {
  }

  getMainContributions() {
    this.httpService.getContributions().then(data => {
      console.log("mainContributions", data);
      this.mainContributions = data['contributions'];
      this.mainContributions.sort(function (a, b) {
        return b.points - a.points;
      });
    }).catch(err => {
      console.log("error:", err);
    });
  }

  getNewContributions(){
    this.httpService.getNewContributions().then(data => {
      console.log("newContributions", data);
      this.newContributions = data['contributions'];
      this.newContributions.sort(function(a,b){
        return b.created_at - a.created_at;
      });
    }).catch(err => {
      console.log("error:", err);
    });
  }

  getAskContributions(){
    this.httpService.getAskContributions().then(data => {
      console.log("askContributions", data);
      this.askContributions = data['contributions'];
      this.askContributions.sort(function(a,b){
        return b.points - a.points;
      });
    }).catch(err => {
      console.log("error:", err);
    });
  }
}
