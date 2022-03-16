import { createContext } from "react";
import { ArticleInterface } from "../interfaces/ArticleInterface";

interface IArticleContext {
  articles: ArticleInterface[],
  search: Function,
  searchApi: Function,
  message: string,
  handleClickPrev: () => void,
  handleClickNext: () => void,
  page: number
}

export const ArticleContext = createContext<IArticleContext>({} as IArticleContext);