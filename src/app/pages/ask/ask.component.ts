import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../providers/contribution.service';


@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent implements OnInit {

  subscriber = undefined;
  constructor(public contributionService:ContributionService) { 
    this.contributionService.getAskContributions();
    this.subscriber = this.contributionService.updateContributionsSubject.subscribe(update => {
      this.contributionService.getAskContributions();
    });
  }

  ngOnInit() {
    
  }

  ngOnDestroy(){
    if(this.subscriber != undefined){
      this.subscriber.unsubscribe();
    }
  }

}
