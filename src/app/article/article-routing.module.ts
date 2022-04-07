import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ArticleComponent} from './article.component';
import {ArticleListComponent} from './article-list/article.list.component';
import {ArticleEditComponent} from './article-list/edit/article.edit.component';
import {AuthGuardService} from '../authentication/services/auth-guard.service';
import {CanDeactivateGuard} from "./services/can-deactivate.guard";

const articleRoutes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    canActivateChild: [AuthGuardService],
    children: [
      {
        path: '',
        component: ArticleListComponent,
      },
      {
        path: ':id',
        component: ArticleEditComponent,
        canDeactivate: [ CanDeactivateGuard ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(articleRoutes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule {
}
