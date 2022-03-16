import React from 'react';
import { Routes, Route } from "react-router-dom";
import WrapperContent from './components/WrapperContent';
import Header from './components/Header';
import SearchContent from './components/SearchContent';
import ArticleRead from './components/ArticleRead';

function App(){
  return (
    <WrapperContent>
      <Header />
      <Routes>
        <Route path="/" element={<SearchContent />} />
        <Route path="/articles/:page" element={<SearchContent />} />
        <Route path="/article/:title/:id" element={<ArticleRead />} />
      </Routes>
    </WrapperContent>
  )
}

export default App;