import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';


@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  contributions = [];

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getAskContributions().then(data => {
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
