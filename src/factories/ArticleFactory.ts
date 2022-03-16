/* eslint-disable no-underscore-dangle */
import { ArticleInterface } from "../interfaces/ArticleInterface";

export default class ArticleFactory {
  
  static builder(payload:any[]): ArticleInterface[] {

    const articles: ArticleInterface[] = [] as ArticleInterface[];

    payload.map((article:any) => 
      articles.push({
        id: article._id,
        title: article.abstract,
      })
    );

    return articles;
  }
}