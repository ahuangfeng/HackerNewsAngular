import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../providers/contribution.service';


@Component({
  selector: 'app-new-contributions',
  templateUrl: './new-contributions.component.html',
  styleUrls: ['./new-contributions.component.css']
})
export class NewContributionsComponent implements OnInit {

  constructor(public contributionService:ContributionService) {

  }

  ngOnInit() {
    this.contributionService.getNewContributions();
  }

}
