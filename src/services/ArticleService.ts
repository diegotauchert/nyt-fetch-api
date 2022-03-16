/* eslint-disable no-async-promise-executor */
import HttpClientFetch from '../core/HttpClientFetch';
import { HttpClientInterface } from '../core/interfaces/HttpClientInterface';
import ArticleFactory from '../factories/ArticleFactory';
import { ArticleInterface } from '../interfaces/ArticleInterface';

export default class ArticleService {

  http: HttpClientInterface;

  constructor() {
    this.http = new HttpClientFetch();
  }

  private baseUrl = process.env.REACT_APP_API_URL;

  private apiKey = process.env.REACT_APP_API_KEY;

  public async fetchArticles(): Promise<ArticleInterface[]> {
    const url = `${this.baseUrl}/articlesearch.json?api-key=${this.apiKey}`;

    const response = await this.http.get(url);

    return new Promise<ArticleInterface[]>(async (resolve, reject) => {
      if (response.ok) {
        const { response:data } = await response.json();
        const { docs:articles } = data;

        resolve(ArticleFactory.builder(articles));
      } else {
        reject(new Error("something bad happened"));
      }
    })
  }
}