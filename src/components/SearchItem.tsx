import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { normalizeUrl, encodePipe } from '../helpers/normalizeUrl';
import { ArticleInterface } from '../interfaces/ArticleInterface';

const StyledSearchResult = styled.div`
  padding: 1.2rem;
  background-color: #F8F8F8;
  border: 1px solid #D1D1D1;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #EEE;
  }
`;

const StyledTitle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  display: flex;
  justify-items: center;
  align-items: center;
  gap: 0.75rem;
`;

type ISearchResultProps = {
  item: ArticleInterface
}

function SearchResult({item}: ISearchResultProps) {
  return (
    <Link to={`/article/${normalizeUrl(item.title)}/${encodePipe(item.id)}`} style={{textDecoration: 'none'}}>
      <StyledSearchResult>
        <div>
            <StyledTitle>
              <img src="/favicon.ico" alt="article icon" width={20} height={20} />
              {item.title}
            </StyledTitle>
        </div>
      </StyledSearchResult>
    </Link>
  )
}
    
export default SearchResult;