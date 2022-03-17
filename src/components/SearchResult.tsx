import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { FormattedMessage, useIntl } from 'react-intl';
import SearchItem from './SearchItem';
import { ArticleContext } from '../contexts/ArticleContext';
import { ArticleContextInterface } from '../contexts/interfaces/ArticleContextInterface';
import { ArticleInterface } from '../interfaces/ArticleInterface';
import Skeleton from './Skeleton';

const StyledSearchResult = styled.div`
  margin-top: 2rem;
`;

const StyledTitle = styled.label`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
`;

function SearchResult() {
  const { articles, page, message } = useContext<ArticleContextInterface>(ArticleContext);
  const intl = useIntl();
  
  return (
    <StyledSearchResult>
      <div>
        <StyledTitle htmlFor='search-input'>
          <FormattedMessage id="title.result" />:
          <small>Page: {page}</small>
        </StyledTitle>
        <div role="feed">
          {
            articles && articles.length > 0 ? 
              articles.map((item:ArticleInterface) => (
                <SearchItem item={item} key={item.id} />
              )) 
            : 
            <div>
              { message !== intl.formatMessage({ id: 'text.loading' }) ? <strong>{message}</strong> : <Skeleton /> }
            </div>
          }
        </div>
      </div>
    </StyledSearchResult>
  )
}
    
export default memo(SearchResult);