import { Component, OnInit } from '@angular/core';
import { ContributionService } from '../../providers/contribution.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(public contributionService: ContributionService) {

  }

  ngOnInit() {
    this.contributionService.getMainContributions();
  }

}
