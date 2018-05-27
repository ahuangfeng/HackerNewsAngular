import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';
import { Observable, of, throwError } from "rxjs"

import { map, catchError } from "rxjs/operators"

@Component({
  selector: 'app-new-contributions',
  templateUrl: './new-contributions.component.html',
  styleUrls: ['./new-contributions.component.css']
})
export class NewContributionsComponent implements OnInit {

  contributions = [];

  constructor(private httpService: HttpService) { 

  }

  ngOnInit() {
    this.httpService.getNewContributions().then(data => {
      console.log("data", data);
      this.contributions = data['contributions'];
    }).catch(err => {
      console.log("error:", err);
    })
  }

}
