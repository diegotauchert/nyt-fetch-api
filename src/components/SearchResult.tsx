import React, { memo } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import SearchItem from './SearchItem';
import { ArticleInterface } from '../interfaces/ArticleInterface';

const StyledSearchResult = styled.div`
  margin-top: 2rem;
`;

const StyledTitle = styled.label`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
`;

type ISearchResultProps = {
  articles: ArticleInterface[]
}

function SearchResult({articles}: ISearchResultProps) {
  return (
    <StyledSearchResult>
      <div>
        <StyledTitle htmlFor='search-input'>
          <FormattedMessage id="title.result" />:
        </StyledTitle>
        
        {
          articles && articles.length > 0 ? 
            articles.map((item:ArticleInterface) => (
              <SearchItem key={item.id} item={item} />
            )) 
          : 
            <StyledTitle>Loading ...</StyledTitle>
        }
      </div>
    </StyledSearchResult>
  )
}
    
export default memo(SearchResult);