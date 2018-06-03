import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';
import { AuthService } from '../../providers/auth.service';
import { ThreadsService } from '../../providers/threads.service';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {

  constructor(public threadsService:ThreadsService) { 
    this.threadsService.getThreads();
  }

  ngOnInit() {
    
  }
}
