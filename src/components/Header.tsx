import React, { memo } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${(props) => props.color};
  text-align: center;
  color: white;
  padding: 1rem;
`;

const StyledTitle = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
`;

function Header() {
  return (
    <StyledHeader color="black">
      <header>
        <StyledTitle>
          <FormattedMessage id="app.title" />
        </StyledTitle>
      </header>
    </StyledHeader>
  )
}
    
export default memo(Header);