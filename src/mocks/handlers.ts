/* eslint-disable arrow-body-style */
import { rest } from 'msw';
import { articlesMock, articlesMock2 } from './articlesMock';

export const handlers = [
  rest.get(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json`, 
    async (req, res, ctx) => {
      if(req.url.searchParams.get('page') === '1') {
        return res(
          ctx.status(200),
          ctx.json(articlesMock)
        )
      }
      
      return res(
        ctx.status(200),
        ctx.json(articlesMock2)
      )
    }
  ),
]
