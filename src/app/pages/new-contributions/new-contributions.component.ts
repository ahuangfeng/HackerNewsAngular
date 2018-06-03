import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../providers/contribution.service';


@Component({
  selector: 'app-new-contributions',
  templateUrl: './new-contributions.component.html',
  styleUrls: ['./new-contributions.component.css']
})
export class NewContributionsComponent implements OnInit {

  subscriber = undefined;
  constructor(public contributionService:ContributionService) {
    this.contributionService.getNewContributions();
    this.subscriber = this.contributionService.updateContributionsSubject.subscribe(data => {
      this.contributionService.getNewContributions();
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
