import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';

const StyledSearchBar = styled.div`
  margin-top: 2rem;
`;

const StyledTitle = styled.label`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: block;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  font-weight: 700;
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #ccc;
  background-color: #FFFDF4;
  color: #333;
  &:focus {
    transition: all 0.3s ease-in-out;
    outline: none;
    border:1px solid #000;
    box-shadow: none;
  }
`;

const searchBar = () => {
  const intl = useIntl();

  return (
    <StyledSearchBar>
      <div>
        <StyledTitle htmlFor='search-input'>
          <FormattedMessage id="title.searchBar" />:
        </StyledTitle>
        <StyledInput type="text" id='search-input' placeholder={intl.formatMessage({ id: 'placeholder.text' })} title={intl.formatMessage({ id: 'placeholder.text' })} />
      </div>
    </StyledSearchBar>
  )
}
    
export default searchBar;