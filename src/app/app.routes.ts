import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NewContributionsComponent } from './pages/new-contributions/new-contributions.component';
import { ThreadsComponent } from './pages/threads/threads.component';
import { AskComponent } from './pages/ask/ask.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { UserComponent } from './pages/user/user.component';
import { FullContributionComponent } from './pages/full-contribution/full-contribution.component';
import { EditContributionComponent } from './pages/edit-contribution/edit-contribution.component';


export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  { path: 'main', component: MainComponent },
  { path: 'contribution/:id', component: FullContributionComponent },
  { path: 'new', component: NewContributionsComponent },
  { path: 'threads', component: ThreadsComponent },
  { path: 'ask', component: AskComponent },
  { path: 'submit', component: SubmitComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'contribution/:id/edit', component: EditContributionComponent }

];
