import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import SearchItem from './SearchItem';
import { ArticleContext } from '../contexts/ArticleContext';
import { ArticleInterface } from '../interfaces/ArticleInterface';

const StyledSearchResult = styled.div`
  margin-top: 2rem;
`;

const StyledTitle = styled.label`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

type ISearchResultProps = {
  articles: ArticleInterface[]
}

function SearchResult({articles}: ISearchResultProps) {
  const { message, page } = useContext(ArticleContext);

  return (
    <StyledSearchResult>
      <div>
        <StyledTitle htmlFor='search-input'>
          <FormattedMessage id="title.result" />:
          <small>Page: {page}</small>
        </StyledTitle>
        <div role="feed">
          {
            articles && articles.length > 0 ? 
              articles.map((item:ArticleInterface) => (
                <div role="article" key={item.id}>
                  <SearchItem item={item} />
                </div>
              )) 
            : 
              <StyledTitle>{message}</StyledTitle>
          }
        </div>
      </div>
    </StyledSearchResult>
  )
}
    
export default memo(SearchResult);