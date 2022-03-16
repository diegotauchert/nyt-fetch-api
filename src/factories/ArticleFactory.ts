/* eslint-disable no-underscore-dangle */
import { format } from 'date-fns'
import { ArticleInterface } from "../interfaces/ArticleInterface";

export default class ArticleFactory {
  
  static builder(payload:any[]): ArticleInterface[] {

    const articles: ArticleInterface[] = [] as ArticleInterface[];

    payload.map((article:any) => 
      articles.push({
        id: article._id,
        title: article.abstract,
        web_url: article.web_url || '',
        date: article.pub_date ? format(new Date(article.pub_date), 'dd.MM.yyyy') : '',
        paragraph: article.lead_paragraph || '',
      })
    );

    return articles;
  }
}