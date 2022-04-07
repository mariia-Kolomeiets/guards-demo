import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { map } from 'rxjs/operators';

import { Article } from './article';


@Injectable()
export class ArticleService {
  articles$$ =  new BehaviorSubject([
    {
      articleId: 1,
      title: 'Core Java Tutorial',
      category: 'Java',
    },
    {
      articleId: 2,
      title: 'Angular Tutorial',
      category: 'Angular',
    },
    {
      articleId: 3,
      title: 'Hibernate Tutorial',
      category: 'Hibernate',
    },
  ])

	getArticles(): Observable<Article[]> {
		return this.articles$$.asObservable();
	}

	getArticle(id: number): Observable<Article | undefined> {
		return this.getArticles().pipe(
			map(articles => articles.find(article => article.articleId === id))
		);
	}

	updateArticle(article: Article) {
    const articles = this.articles$$.getValue();
    const index = articles.findIndex(ob => ob.articleId === article.articleId);
    articles[index] = article;

    this.articles$$.next(articles);
	}
}
