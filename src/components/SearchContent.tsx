import React, { ReactNode } from 'react';
import SearchBar from './SearchBar';
import styled from 'styled-components';

const StyledSearchContent = styled.div`
  padding: 1rem;
`;

const SearchContent = () => {
  return (
    <StyledSearchContent>
      <SearchBar />
    </StyledSearchContent>
  )
}
    
export default SearchContent;