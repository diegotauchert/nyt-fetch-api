import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useIntl } from 'react-intl';
import ArticleService from '../services/ArticleService';
import { ArticleInterface } from '../interfaces/ArticleInterface';
import { ArticleContext } from '../contexts/ArticleContext';

type IAppProviderProps = {
  children: React.ReactNode;
}

const PAGE_DEFAULT = 1;

export default function AppProvider({ children }: IAppProviderProps) {
  const ArticleServiceInstance = new ArticleService();
  const [articlesFetch, setArticlesFetch] = useState<ArticleInterface[]>([] as ArticleInterface[]);
  const [articles, setArticles] = useState<ArticleInterface[]>([] as ArticleInterface[]);
  const [message, setMessage] = useState<string>('' as string);
  const [page, setPage] = useState<number>(PAGE_DEFAULT);
  const divRef = useRef<null | HTMLDivElement>(null);
  const intl = useIntl();

  const fetchData = useCallback(async (filter?:string, offset: number = 1) => {
    await ArticleServiceInstance.fetchArticles(offset, filter).then((res:ArticleInterface[]) => {
      setArticlesFetch(res)
      setArticles(res)
    }).finally(() => setMessage(''))
  }, [])

  useEffect(() => {
    setMessage(intl.formatMessage({ id: 'text.loading' }));
    fetchData('', page)

    return () => {
      setArticlesFetch([] as ArticleInterface[]);
      setArticles([] as ArticleInterface[]);
      setMessage('' as string)
    }
  }, [page])

  const search = (value: string) => {
    if(value){
      const cloneArticles = [...articlesFetch]
      const filteredArticles = cloneArticles.filter((article: ArticleInterface) => article.title.toLowerCase().includes(value.toLowerCase()))
      setArticles(filteredArticles)

      if(filteredArticles.length === 0){
        setMessage(intl.formatMessage({ id: 'text.resultNotFound' }))
      }
    } else {
      setArticles(articlesFetch)
    }
  }

  const searchApi = (filter: string) => {
    fetchData(filter, page)
  }

  const scrollToTop = () => {
    try{
      divRef.current!.scrollIntoView({ behavior: 'smooth' });
    // eslint-disable-next-line no-empty
    }catch(e){}
  }

  const handleClickPrev = () => {
    setPage(el => el - 1)
    scrollToTop()
  }

  const handleClickNext = () => {
    setPage(el => el + 1)
    scrollToTop()
  }

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ArticleContext.Provider value={{ articles, search, searchApi, message, handleClickPrev, handleClickNext, page, divRef }}>
      {children}
    </ArticleContext.Provider>
  );
}