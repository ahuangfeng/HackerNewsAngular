import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../providers/contribution.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  subscriber = undefined;
  constructor(public contributionService: ContributionService) {
    this.contributionService.getMainContributions();
    this.subscriber = this.contributionService.updateContributionsSubject.subscribe(update => {
      this.contributionService.getMainContributions();
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
