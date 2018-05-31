import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';


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

  submitForm = new FormGroup ({
    title: new FormControl(),
    url: new FormControl(),
    ask: new FormControl()
  });

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

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
    /*if(this.ask !== undefined && this.url !== undefined) {
      this.errorMessage = "Unable to create, you must choose between type url or type ask";
      document.getElementById("p").style.visibility = "visible";
    }
    else if(this.ask === undefined && this.url === undefined) {
      this.errorMessage = "You must enter an url or an ask.";
      document.getElementById("p").style.visibility = "visible";
    }*/
    let title, url, text;
    console.log("button clicked")
    if (this.title === undefined) {
      title = undefined;
    }
    else {
      title = this.title.target.value;
    }
    if (this.url === undefined) {
      url = undefined;
    }
    else {
      url = this.url.target.value;
    }
    if (this.ask === undefined) {
      text = undefined;
    }
    else {
      text = this.ask.target.value;
    }
    this.httpService.postNewContributions(title, url, text).then(data => {
      if (this.ask === undefined) {
        this.router.navigateByUrl('/main');

      }
      else {
        this.router.navigateByUrl('/ask');

      }
    }).catch(err => {
      this.errorMessage = err.error.message;
      document.getElementById("p").style.visibility = "visible";
      if (err.error.url !== undefined && err.error.url[0] === "is invalid") {
        this.errorMessage = "The url is invalid";
        document.getElementById("p").style.visibility = "visible";

      }
    })
  }

}
