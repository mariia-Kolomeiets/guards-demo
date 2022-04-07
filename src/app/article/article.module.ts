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
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatDialogModule} from "@angular/material/dialog";
import { LeavingDialogComponent } from './leaving-dialog/leaving-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ArticleRoutingModule,
    MatListModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent,
    ArticleEditComponent,
    LeavingDialogComponent
  ],
  providers: [ArticleService]
})
export class ArticleModule {
}
