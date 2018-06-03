import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributionService {

  public mainContributions = [];

  constructor(private httpService: HttpService) {
  }

  getMainContributions() {
    this.httpService.getContributions().then(data => {
      console.log("data", data);
      this.mainContributions = data['contributions'];
      this.mainContributions.sort(function (a, b) {
        return b.points - a.points;
      });
    }).catch(err => {
      console.log("error:", err);
    });
  }

}
