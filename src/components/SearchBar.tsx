import React, { useRef, useContext, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import styled from 'styled-components';
import { ArticleContext } from '../contexts/ArticleContext';
import searchIcon from '../assets/search.svg';

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

const StyledFormField = styled.div`
  display: flex;
  position: relative;
`;

const StyledButton = styled.button`
  position: absolute;
  border: none;
  background-color: transparent;
  right: 1rem;
  top: 1rem;
  cursor: pointer;
  z-index: 1;
  opacity: 0.5;

  &:hover {
    transition: all 0.3s ease-in-out;
    opacity: 1;
  }
`;

const StyledError = styled.p`
  margin-top: .5rem;
  color: red;
  font-weight: 700;
  font-size:0.9rem
`;

const searchBar = () => {
  const intl = useIntl();
  const inputRef = useRef<HTMLInputElement>(null);
  const { search, searchApi } = useContext(ArticleContext);
  const [warning, setWarning] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    search(e.target.value);
    setWarning(false);
  }

  const handleClick = () => {
    if (inputRef.current!.value) {
      searchApi(inputRef.current!.value);
    }else{
      setWarning(true)
      inputRef.current!.focus()
    }
  }

  return (
    <StyledSearchBar>
      <div>
        <StyledTitle htmlFor='search-input'>
          <FormattedMessage id="title.searchBar" />:
        </StyledTitle>
        <StyledFormField>
          <StyledInput 
            type="text" 
            ref={inputRef} 
            id='search-input' 
            onChange={handleChange} 
            placeholder={intl.formatMessage({ id: 'placeholder.text' })} 
            title={intl.formatMessage({ id: 'placeholder.text' })} 
          />
          <StyledButton 
            type='button' 
            onClick={handleClick} 
            aria-label="Submit button"
          >
            <img src={searchIcon} alt="search icon" width={20} height={20} />
          </StyledButton>
        </StyledFormField>
        {warning && <StyledError><FormattedMessage id="error.required" /></StyledError>}
      </div>
    </StyledSearchBar>
  )
}
    
export default searchBar;