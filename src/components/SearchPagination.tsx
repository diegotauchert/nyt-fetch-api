import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledDivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.2rem;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: #3979F2;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
  font-size: 1rem;
`;

function SearchPagination() {
  return (
    <StyledDivButton>
      <StyledButton>
        &lsaquo; <FormattedMessage id="btn.prev" />
      </StyledButton>
      <StyledButton>
        <FormattedMessage id="btn.next" /> &rsaquo;
      </StyledButton>
    </StyledDivButton>
  )
}
    
export default SearchPagination;