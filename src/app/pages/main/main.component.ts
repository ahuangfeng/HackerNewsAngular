import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';
import { Observable, of, throwError } from "rxjs"

import { map, catchError } from "rxjs/operators"


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  contributions = [];

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
    this.httpService.getContributions().then(data => {
      console.log("data", data);
      this.contributions = data['contributions'];
    }).catch(err => {
      console.log("error:", err);
    })
  }

}
