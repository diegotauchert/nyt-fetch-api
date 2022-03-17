import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import WrapperContent from './components/WrapperContent';
import Header from './components/Header';

const ArticleRead = lazy(() => import("./components/ArticleRead"));
const SearchContent = lazy(() => import("./components/SearchContent"));
const NotFound = lazy(() => import("./components/NotFound"));

function App(){
  return (
    <WrapperContent>
      <Header />
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route path="/" element={<SearchContent />} />
          <Route path="/articles/:page" element={<SearchContent />} />
          <Route path="/article/:title/:id" element={<ArticleRead />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </WrapperContent>
  )
}

export default App;