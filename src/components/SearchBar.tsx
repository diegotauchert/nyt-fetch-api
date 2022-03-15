import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  margin-top: 2rem;
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

const searchBar = () => {
  return (
    <StyledSearchBar>
      <div>
        <StyledTitle>
          <FormattedMessage id="title.searchBar" />:
        </StyledTitle>
      </div>
    </StyledSearchBar>
  )
}
    
export default searchBar;