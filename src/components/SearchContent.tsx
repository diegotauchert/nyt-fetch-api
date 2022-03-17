import React, { useContext } from 'react';
import styled from 'styled-components';
import { ArticleContext } from '../contexts/ArticleContext';
import SearchBar from './SearchBar';
import SearchPagination from './SearchPagination';
import SearchResult from './SearchResult';

const StyledSearchContent = styled.div`
  padding: 1rem;
  margin: 0 auto;
  width: 70%;
  min-width: 75vmin;
`;

function SearchContent() {

  const { divRef } = useContext(ArticleContext)

  return (
    <StyledSearchContent ref={divRef}>
      <SearchBar />
      <SearchResult />
      <SearchPagination />
    </StyledSearchContent>
  )
}
    
export default SearchContent;