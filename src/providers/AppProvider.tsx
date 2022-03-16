/* eslint-disable default-param-last */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import ArticleService from '../services/ArticleService';
import { ArticleInterface } from '../interfaces/ArticleInterface';

import en from '../locales/en.json';
import { ArticleContext } from '../contexts/ArticleContext';

type IAppProviderProps = {
  children: React.ReactNode;
}

export default function AppProvider({ children }: IAppProviderProps) {
  const ArticleServiceInstance = new ArticleService();
  const [articlesFetch, setArticlesFetch] = useState<ArticleInterface[]>([] as ArticleInterface[]);
  const [articles, setArticles] = useState<ArticleInterface[]>([] as ArticleInterface[]);
  const [message, setMessage] = useState<string>('');

  const fetchData = async (offset: number = 1, filter?:string) => {
    await ArticleServiceInstance.fetchArticles(offset, filter).then((res:ArticleInterface[]) => {
      setArticlesFetch(res)
      setArticles(res)
    }).finally(() => setMessage(''))
  }

  useEffect(() => {
    setMessage('Loading...');
    fetchData()
  }, [])

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
    fetchData(1,filter)
  }

  return (
    <IntlProvider locale="en" messages={en}>
      <ArticleContext.Provider value={{ articles, search, searchApi, message }}>
        {children}
      </ArticleContext.Provider>
    </IntlProvider>
  );
}