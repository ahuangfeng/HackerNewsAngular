import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { NewContributionsComponent } from './pages/new-contributions/new-contributions.component';
import { ThreadsComponent } from './pages/threads/threads.component';
import { AskComponent } from './pages/ask/ask.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
import { FullContributionComponent } from './pages/full-contribution/full-contribution.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewContributionsComponent,
    ThreadsComponent,
    AskComponent,
    SubmitComponent,
    UserComponent,
    LoginComponent,
    FullContributionComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase, 'hnangular'),
    AngularFireAuthModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
