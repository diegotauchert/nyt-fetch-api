import { createContext } from "react";
import { ArticleContextInterface } from "./interfaces/ArticleContextInterface";

export const ArticleContext = createContext<ArticleContextInterface>({} as ArticleContextInterface);