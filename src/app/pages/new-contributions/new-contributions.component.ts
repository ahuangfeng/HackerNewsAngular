import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';


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
      this.contributions.sort(function(a,b){
        return b.created_at - a.created_at;
      });
    }).catch(err => {
      console.log("error:", err);
    });
  }

}
