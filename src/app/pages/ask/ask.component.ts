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
    }).catch(err => {
      console.log("error:", err);
    })
  }

}
