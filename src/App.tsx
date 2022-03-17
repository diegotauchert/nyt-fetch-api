import React, { lazy, Suspense } from 'react';
import { Routes, Route } from "react-router-dom";
import WrapperContent from './components/WrapperContent';
import Header from './components/Header';

const ArticleRead = lazy(() => import("./components/ArticleRead"));
const SearchContent = lazy(() => import("./components/SearchContent"));

function App(){
  return (
    <WrapperContent>
      <Header />
      <Routes>
        <Route path="/" element={<Suspense fallback={<>...</>}><SearchContent /></Suspense>} />
        <Route path="/articles/:page" element={<Suspense fallback={<>...</>}><SearchContent /></Suspense>} />
        <Route path="/article/:title/:id" element={<Suspense fallback={<>...</>}><ArticleRead /></Suspense>} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </WrapperContent>
  )
}

export default App;