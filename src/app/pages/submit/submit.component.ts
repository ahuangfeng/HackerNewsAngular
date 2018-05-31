import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../providers/http.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})

export class SubmitComponent implements OnInit {

  errorMessage;

  submitForm = new FormGroup({
    title: new FormControl('', Validators.required),
    url: new FormControl(''),
    ask: new FormControl('')
  });

  constructor(private httpService: HttpService, private router: Router) { }

  ngOnInit() {
  }

  createContribution() {
    var values = this.submitForm.value;
    // console.log("EOO:", this.submitForm.value);
    if (values.title == '') {
      this.errorMessage = "You have to enter a valid title.";
      return;
    }

    if (this.submitForm.valid) {
      if ((values.url == "") && (values.ask == '')) {
        this.errorMessage = "You have to enter an valid url OR a valid text.";
        return;
      }

      if ((values.url != "") && (values.ask != '')) {
        this.errorMessage = "You have to choose between an url contribution or a text contribution.";
        return;
      }

      if (values.url == "") {
        console.log("ASK:", values.ask);
        this.httpService.postNewContributions(values.title, undefined, values.ask).then(data => {
          this.router.navigateByUrl('/ask');
          // console.log("DATA:", data);
        }).catch(err => {
          this.errorMessage = err.error.message;
        });
      } else {
        var expression = '^(http|https)://'
        var regex = new RegExp(expression);
        if (values.url.match(regex)) {
          this.httpService.postNewContributions(values.title, values.url, undefined).then(data => {
            this.router.navigateByUrl('/main');
          }).catch(err => {
            this.errorMessage = err.error.message;
          });
        } else {
          this.errorMessage = "Enter a valid URL: beginning by 'http://' or 'https://' . ";
        }
      }
    }
  }

}
