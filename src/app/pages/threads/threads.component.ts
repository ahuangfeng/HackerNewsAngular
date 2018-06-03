import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';
import { AuthService } from '../../providers/auth.service';
import { ThreadsService } from '../../providers/threads.service';
import { ContributionService } from '../../providers/contribution.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  subscriber = undefined;

  constructor(public threadsService:ThreadsService, public contributionService:ContributionService) { 
    this.threadsService.getThreads();
    this.subscriber = this.contributionService.updateCommentsSubject.subscribe(update => {
      this.threadsService.getThreads();
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
