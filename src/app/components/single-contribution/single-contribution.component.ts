
import { Component, OnInit, Input } from '@angular/core';
import { Contribution } from '../../model/contribution';
import { AuthService } from '../../providers/auth.service';

@Component({
  selector: 'single-contribution',
  templateUrl: './single-contribution.component.html',
  styleUrls: ['./single-contribution.component.scss']
})
export class SingleContributionComponent implements OnInit {

  @Input() contribution: any;

  contributionShow: Contribution;

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.contributionShow = new Contribution(this.contribution);
  }

  ownContribution(){
    return this.authService.currentUserID == this.contributionShow.user_id;
  }

  delete(){
    console.log("TODO: delete");
  }

  edit(){
    console.log("TODO: Edit;");
  }

  vote(){
    console.log("TODO: Vote contribution:", this.contributionShow.id);
  }

  unvote(){
    console.log("TODO: UnVote contribution:", this.contributionShow.id);
  }

}
