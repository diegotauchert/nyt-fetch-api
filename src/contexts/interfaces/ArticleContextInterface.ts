import { RefObject } from 'react';
import { ArticleInterface } from "../../interfaces/ArticleInterface";

export interface ArticleContextInterface {
  articles: ArticleInterface[],
  search: Function,
  searchApi: Function,
  message: string,
  handleClickPrev: () => void,
  handleClickNext: () => void,
  page: number,
  divRef: RefObject<HTMLDivElement>,
}