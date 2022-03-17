import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { decodePipe } from '../helpers/utils';
import ArticleService from '../services/ArticleService';
import { ArticleInterface } from '../interfaces/ArticleInterface';

function ArticleRead() {
  const ArticleServiceInstance = new ArticleService();
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleInterface>({} as ArticleInterface);
  const [message, setMessage] = useState<string>('');

  const fetchSingleArticle = async (articleId: string) => {
    await ArticleServiceInstance.getSingleArticle(articleId).then((res:ArticleInterface) => {
      setArticle(res)
    }).finally(() => setMessage(''))
  }

  useEffect(() => {
    if(id){
      setMessage('Loading...');
      fetchSingleArticle(decodePipe(id))
    }
  }, [id])

  const StyledSingleArticle = styled.div`
    padding: 1rem;
    margin: 4rem auto 0 auto;
    width: 70%;
    min-width: 75vmin;
  `;

  const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: #3979F2;
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
    font-size: 1rem;
    display: block;
    margin-bottom: 1.3rem;
  `;

  const StyledMainTitle = styled.h1`
    font-size: 2.25rem;
    margin-bottom: 1.5rem;
  `;

  const StyledWarning = styled.p`
    color: #000;
    font-size: 1.25rem;
    font-weight: 600;
  `;

  const StyledDate = styled.span`
    display: block;
    color: #333;
    margin-bottom: 1.5rem;
    font-style: italic;
    letter-spacing: 0.025rem;
  `;

  const StyledParagraph = styled.p`
    font-size: 1.1rem;
    line-height: 1.5rem;
    margin-bottom: 2rem;
  `;

  return (
    <StyledSingleArticle>
      <StyledButton type='button' onClick={() => navigate(-1)}>
        &lsaquo; <FormattedMessage id="btn.backPage" />
      </StyledButton>

      {article && article.title ? 
      <>
        <StyledMainTitle>{article.title}</StyledMainTitle>
        <StyledDate>{article.date}</StyledDate>
        <StyledParagraph>{article.paragraph}</StyledParagraph>
        <a href={article.web_url} target='_blank' rel='noopener noreferrer'>
          <StyledButton type='button'>
            <FormattedMessage id="btn.readFull" />
          </StyledButton>
        </a>
      </>
      : 
      <StyledWarning>{message}</StyledWarning>
      }
      
    </StyledSingleArticle>
  )
}
    
export default ArticleRead;