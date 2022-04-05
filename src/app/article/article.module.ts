import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {ArticleComponent} from './article.component';
import {ArticleListComponent} from './article-list/article.list.component';
import {ArticleEditComponent} from './article-list/edit/article.edit.component';
import {ArticleService} from './services/article.service';
import {ArticleRoutingModule} from './article-routing.module';
import {MatListModule} from "@angular/material/list";
import {RouterModule} from "@angular/router";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleRoutingModule,
    MatListModule,
    RouterModule,
    MatCardModule,
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleEditComponent
  ],
  providers: [ArticleService]
})
export class ArticleModule {
}
