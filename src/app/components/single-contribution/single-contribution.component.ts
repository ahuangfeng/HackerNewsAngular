
import { Component, OnInit, Input } from '@angular/core';
import { Contribution } from '../../model/contribution';
import { AuthService } from '../../providers/auth.service';
import { HttpService } from '../../providers/http.service';

@Component({
  selector: 'single-contribution',
  templateUrl: './single-contribution.component.html',
  styleUrls: ['./single-contribution.component.scss']
})
export class SingleContributionComponent implements OnInit {

  @Input() contribution: any;

  contributionShow: Contribution;

  constructor(private authService: AuthService, private httpService: HttpService) { }

  ngOnInit() {
    this.contributionShow = new Contribution(this.contribution);
  }

  ownContribution() {
    return this.authService.currentUserID == this.contributionShow.user_id;
  }

  delete() {
    console.log("TODO: delete");
  }

  edit() {
    console.log("TODO: Edit;");
  }

  update() {
    this.httpService.getContributionById(this.contribution.id).then(data => {
      this.contributionShow = new Contribution(data['contribution']);
    }).catch(this.handleError);
  }

  vote() {
    this.httpService.voteContribution(this.contributionShow.id).then(data => {
      this.update();
    }).catch(this.handleError);
  }

  unvote() {
    this.httpService.unvoteContribution(this.contributionShow.id).then(data => {
      this.update();
    }).catch(this.handleError);
  }

  handleError(err){
    console.error("Error:", err);
  }

}
