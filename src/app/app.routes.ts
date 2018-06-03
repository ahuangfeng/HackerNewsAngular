import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { NewContributionsComponent } from './pages/new-contributions/new-contributions.component';
import { ThreadsComponent } from './pages/threads/threads.component';
import { AskComponent } from './pages/ask/ask.component';
import { SubmitComponent } from './pages/submit/submit.component';
import { UserComponent } from './pages/user/user.component';
import { FullContributionComponent } from './pages/full-contribution/full-contribution.component';
import { EditContributionComponent } from './pages/edit-contribution/edit-contribution.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditCommentComponent } from './pages/edit-comment/edit-comment.component';
import { NewReplyComponent } from './pages/new-reply/new-reply.component';


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
  { path: 'contribution/:id/edit', component: EditContributionComponent },
  { path: 'contribution/:contribution_id/edit/:id', component: EditCommentComponent },
  { path: 'contribution/:contribution_id/comments/:id/reply', component: NewReplyComponent },
  { path: '**', component: PageNotFoundComponent }
];
