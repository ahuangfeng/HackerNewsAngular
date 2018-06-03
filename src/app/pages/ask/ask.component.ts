import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../providers/contribution.service';


@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  constructor(public contributionService:ContributionService) { 
    this.contributionService.getAskContributions();
  }

  ngOnInit() {
    
  }

}
