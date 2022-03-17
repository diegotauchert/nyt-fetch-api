/* eslint-disable default-param-last */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import ArticleService from '../services/ArticleService';
import { ArticleInterface } from '../interfaces/ArticleInterface';
import { ArticleContext } from '../contexts/ArticleContext';

type IAppProviderProps = {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  const ArticleServiceInstance = new ArticleService();
  const [articlesFetch, setArticlesFetch] = useState<ArticleInterface[]>([] as ArticleInterface[]);
  const [articles, setArticles] = useState<ArticleInterface[]>([] as ArticleInterface[]);
  const [message, setMessage] = useState<string>('');
  const [page, setPage] = useState<number>(1);

  const fetchData = async (offset: number = 1, filter?:string) => {
    await ArticleServiceInstance.fetchArticles(offset, filter).then((res:ArticleInterface[]) => {
      setArticlesFetch(res)
      setArticles(res)
    }).finally(() => setMessage(''))
  }

  useEffect(() => {
    setMessage('Loading...');
    fetchData(page)
  }, [page])

  const search = (value: string) => {
    if(value){
      const cloneArticles = [...articlesFetch]
      const filteredArticles = cloneArticles.filter((article: ArticleInterface) => article.title.toLowerCase().includes(value.toLowerCase()))
      setArticles(filteredArticles)

      if(filteredArticles.length === 0){
        setMessage('No result found')
      }
    } else {
      setArticles(articlesFetch)
    }
  }

  const searchApi = (filter: string) => {
    fetchData(page, filter)
  }

  const handleClickPrev = () => {
    setPage(el => el - 1)
  }

  const handleClickNext = () => {
    setPage(el => el + 1)
  }

  return (
    <ArticleContext.Provider value={{ articles, search, searchApi, message, handleClickPrev, handleClickNext, page }}>
      {children}
    </ArticleContext.Provider>
  );
}