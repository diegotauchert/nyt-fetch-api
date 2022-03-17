import React from 'react';
import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from '../App';

describe('Header', () => {
  it('Should render header', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    const title = screen.getByRole('heading', {
      name: /''the new york times'' article search application/i
    });
    expect(title).toBeInTheDocument();
  });
});

describe('SearchBar', () => {
  it('Should render searchbar', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    const title = screen.getByText(/type search query term in here:/i)
    expect(title).toBeInTheDocument();

    expect(screen.getByRole('img', {
      name: /search icon/i
    })).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/type here \.\.\./i)).toBeInTheDocument();
  });

  it('Should render articles', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/results:/i)).toBeInTheDocument();

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

    waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i))

    //waitFor(() => expect(screen.getAllByRole('article').length).toEqual(10))
  });

  it('Should render prev and next button', async () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    const prevButton = screen.getByRole('button', { name: /‹ prev page/i })
    const nextButton = screen.getByRole('button', { name: /next page ›/i })

    expect(prevButton).toBeInTheDocument();
    expect(prevButton).toBeDisabled();

    expect(nextButton).toBeInTheDocument();
  });
});
