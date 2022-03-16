import React from 'react';
import styled from 'styled-components';
import { ArticleInterface } from '../interfaces/ArticleInterface';

const StyledSearchResult = styled.div`
  padding: 1.2rem;
  background-color: #F8F8F8;
  border: 1px solid #D1D1D1;
`;

const StyledTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

type ISearchResultProps = {
  item: ArticleInterface
}

function SearchResult({item}: ISearchResultProps) {
  return (
    <StyledSearchResult>
      <div>
        <StyledTitle>
          {item.title}
        </StyledTitle>
      </div>
    </StyledSearchResult>
  )
}
    
export default SearchResult;