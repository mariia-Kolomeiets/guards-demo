import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ArticleService } from '../../services/article.service';
import { Article } from '../../services/article';

@Component({
	templateUrl: './article.edit.component.html'
})
export class ArticleEditComponent implements OnInit {
	article = {} as Article;
	constructor(
		private articleService: ArticleService,
		private route: ActivatedRoute
  ) { }

	ngOnInit() {
		this.route.params.pipe(
			switchMap((params: Params) => this.articleService.getArticle(+params['id']))
		).subscribe(article => {
			this.article = article ?? {} as Article;
		});
	}
}
