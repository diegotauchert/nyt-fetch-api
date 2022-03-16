/* eslint-disable default-param-last */
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

  public async fetchArticles(offset: number = 1, filter?: string): Promise<ArticleInterface[]> {
    const fieldsReturned = 'abstract, _id';
    let url = `${this.baseUrl}/articlesearch.json?page=${Number(offset)}&sort=newest&fl=${fieldsReturned}&api-key=${this.apiKey}`;

    if(filter){
      url += `&fq=${filter}`;
    }

    const response = await this.http.get(url);

    return new Promise<ArticleInterface[]>(async (resolve, reject) => {
      if (response.ok) {
        const { response:data } = await response.json();
        const { docs:articles } = data;

        resolve(ArticleFactory.builder(articles));
      } else {
        reject(new Error(response.statusText || 'Something went wrong'));
      }
    })
  }

  public async getSingleArticle(id: string): Promise<ArticleInterface> {
    const fieldsReturned = 'abstract, _id, web_url, pub_date, lead_paragraph';
    const url = `${this.baseUrl}/articlesearch.json?fq=_id:"${id}"&fl=${fieldsReturned}&api-key=${this.apiKey}`;

    const response = await this.http.get(url);

    return new Promise<ArticleInterface>(async (resolve, reject) => {
      if (response.ok) {
        const { response:data } = await response.json();
        const { docs:articles } = data;
        const article = ArticleFactory.builder(articles)

        resolve(article[0]);
      } else {
        reject(new Error(response.statusText || 'Something went wrong'));
      }
    })
  }
}