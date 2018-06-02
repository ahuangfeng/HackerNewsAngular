import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../providers/http.service";
import { Contribution } from '../../model/contribution';


@Component({
  selector: 'app-edit-contribution',
  templateUrl: './edit-contribution.component.html',
  styleUrls: ['./edit-contribution.component.css']
})
export class EditContributionComponent implements OnInit {

  errorMessage;
  contribution: Contribution;
  currentID;
  title;
  url;
  text;

  editForm = new FormGroup({
    title: new FormControl('', Validators.required),
    url: new FormControl(''),
    ask: new FormControl('')
  });



  constructor(private httpService: HttpService, private router: Router, private route: ActivatedRoute) {
    this.currentID = this.getContributionId();
    this.getContribution(this.currentID);
  }

  ngOnInit() {

  }

  getContribution(id){
    this.httpService.getContribution(id).then(data => {
      this.contribution = new Contribution(data['contribution']);
      console.log("DATA:", this.contribution);
      this.editForm.value.title = this.contribution.title;
      if(this.contribution.url === undefined) {
        this.editForm.value.ask = this.contribution.text;
        this.editForm.value.url = '';
      }
      else {
        this.editForm.value.url = this.contribution.url;
        this.editForm.value.ask = '';

      }

    }).then(comments => {
      console.log(comments)
    }).catch(err => {
      this.errorMessage = err.error.message;
    });
  }

  getContributionId(): string {
    return this.route.snapshot.paramMap.get('id');
  }


  editContribution() {
    var values = this.editForm.value;
    console.log("tiiitle :", this.editForm.value)
    console.log("title: "+ this.contribution.url)
    // console.log("EOO:", this.submitForm.value);
    if (values.title === '') {
      this.errorMessage = "You have to enter a valid title.";
      return;
    }



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
        this.httpService.editContribution(this.currentID, values.title, undefined, values.ask).then(data => {
          this.router.navigateByUrl('/ask');
          // console.log("DATA:", data);
        }).catch(err => {
          this.errorMessage = err.error.message;
        });
      } else {
        var expression = '^(http|https)://'
        var regex = new RegExp(expression);
        if (values.url.match(regex)) {
          this.httpService.editContribution(this.currentID, values.title, values.url, undefined).then(data => {
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
