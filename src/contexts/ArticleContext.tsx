import { createContext } from "react";
import { ArticleInterface } from "../interfaces/ArticleInterface";

interface IArticleContext {
  articles: ArticleInterface[],
  search: Function,
  searchApi: Function,
  message: string
}

export const ArticleContext = createContext<IArticleContext>({} as IArticleContext);