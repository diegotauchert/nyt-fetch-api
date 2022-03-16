import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
import ArticleService from '../services/ArticleService';
import { ArticleInterface } from '../interfaces/ArticleInterface';


const StyledSearchContent = styled.div`
  padding: 1rem;
  margin: 0 auto;
  width: 70%;
  min-width: 75vmin;
`;

function SearchContent() {
  const ArticleServiceInstance = new ArticleService();
  const [articles, setArticles] = useState<ArticleInterface[]>([] as ArticleInterface[]);

  useEffect(() => {
    ArticleServiceInstance.fetchArticles().then((res:any) => {
      setArticles(res)
    })
  }, [])

  return (
    <StyledSearchContent>
      <SearchBar />
      <SearchResult articles={articles} />
    </StyledSearchContent>
  )
}
    
export default SearchContent;