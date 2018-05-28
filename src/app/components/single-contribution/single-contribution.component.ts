
import { Component, OnInit, Input } from '@angular/core';
import { Contribution } from '../../model/contribution';

@Component({
  selector: 'single-contribution',
  templateUrl: './single-contribution.component.html',
  styleUrls: ['./single-contribution.component.scss']
})
export class SingleContributionComponent implements OnInit {

  @Input() contribution: any;

  contributionShow: Contribution;

  constructor() { }

  ngOnInit() {
    this.contributionShow = new Contribution(this.contribution);
  }

}
