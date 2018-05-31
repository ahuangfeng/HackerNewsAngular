// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// Libraries
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { JwtModule } from '@auth0/angular-jwt';

// App root
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { environment } from '../environments/environment';

// Pages
import { MainComponent } from './pages/main/main.component';
import { NewContributionsComponent } from './pages/new-contributions/new-contributions.component';
import { ThreadsComponent } from './pages/threads/threads.component';
import { AskComponent } from './pages/ask/ask.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { UserComponent } from './pages/user/user.component';
import { FullContributionComponent } from './pages/full-contribution/full-contribution.component';

// Components
import { SingleContributionComponent } from './components/single-contribution/single-contribution.component';
import { SingleCommentComponent } from './components/single-comment/single-comment.component';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NewContributionsComponent,
    ThreadsComponent,
    AskComponent,
    SubmitComponent,
    UserComponent,
    FullContributionComponent,
    SingleContributionComponent,
    SingleCommentComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        headerName: 'Authorization'
        // whitelistedDomains: ['localhost:4200']
      }
    }),
    BrowserModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase, 'hnangular'),
    AngularFireAuthModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
