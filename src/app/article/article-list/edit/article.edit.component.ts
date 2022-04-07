import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {switchMap, take} from 'rxjs/operators';

import { ArticleService } from '../../services/article.service';
import { Article } from '../../services/article';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable, tap} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {LeavingDialogComponent} from "../../leaving-dialog/leaving-dialog.component";

@Component({
	templateUrl: './article.edit.component.html'
})
export class ArticleEditComponent implements OnInit {
  // @ts-ignore
	article = {} as Article;
  // @ts-ignore
  articleForm: FormGroup;

	constructor(
		private articleService: ArticleService,
		private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

	ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    this.articleService.getArticle(Number(id)).pipe(
      tap((article) => {
        this.article = article as Article;
        this.buildForm();
      }),
      take(1),
    ).subscribe();

	}

	buildForm(): void {
	  this.articleForm = this.fb.group({
      title: this.fb.control(this.article.title, {
        validators: [ Validators.required ]
      }),
      category: this.fb.control(this.article.category, {
        validators: [ Validators.required ]
      }),
    })
  }

	cancel(): void {
	  this.router.navigateByUrl('home/article');
  }

  onFormSubmit(): void {
	  if(this.articleForm.invalid) {
      return;
    }

	  const title = this.articleForm.get('title')?.value;
	  const category = this.articleForm.get('category')?.value;

	  const newArticle = {
      articleId: this.article.articleId,
      title,
      category
    };

	  this.articleService.updateArticle(newArticle);
	  this.article = newArticle;

    this.router.navigateByUrl('home/article');
  }

  canDeactivate(): Observable<boolean> | boolean {
    const title = this.articleForm.get('title')?.value;
    const category = this.articleForm.get('category')?.value;

    console.log(this.article, title, category)
    if(title === this.article.title && category === this.article.category){
      return true;
    }

	 return this.dialog.open(LeavingDialogComponent).afterClosed();
  }
}
