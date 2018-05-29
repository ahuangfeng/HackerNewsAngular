import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})


export class SubmitComponent implements OnInit {

  title;
  url;
  ask;
  errorMessage;



  changeTitle(newValue) {
    this.title = newValue;
  }

  changeUrl(newValue) {
    this.url = newValue;
  }

  changeAsk(newValue) {
    this.ask = newValue;
  }

  createContribution() {
    if(this.ask !== undefined && this.url !== undefined) {
      this.errorMessage = "Unable to create, you must choose between type url or type ask";
      document.getElementById("p").style.visibility = "visible";
    }
    if (this.ask === undefined && this.url !== undefined) {
      //TODO: contribution type url
    }

    else if(this.ask !== undefined && this.url === undefined) {
      //TODO: contribution type ask
    }

    else {
      //TODO: message error
      this.errorMessage = "You must enter an url or an ask.";
      document.getElementById("p").style.visibility = "visible";

    }



    /*console.log(this.title.target.value);
    console.log(this.url.target.value);
    console.log(this.ask.target.value);*/

  }
  constructor() { }

  ngOnInit() {
  }

}
