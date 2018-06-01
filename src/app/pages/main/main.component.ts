import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';


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
      this.contributions.sort(function(a,b){
        return b.points - a.points;
      });
    }).catch(err => {
      console.log("error:", err);
    });
  }

}
