import { createContext } from "react";

interface IArticleContext {
  stop: boolean,
}

export const ArticleContext = createContext<IArticleContext>({} as IArticleContext);