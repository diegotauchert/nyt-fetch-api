import React from 'react';
import { Routes, Route } from "react-router-dom";
import WrapperContent from './components/WrapperContent';
import Header from './components/Header';
import SearchContent from './components/SearchContent';

function App(){
  return (
    <WrapperContent>
      <Header />
      <Routes>
        <Route path="/" element={<SearchContent />} />
        <Route path="/article" element={<div>Article</div>} />
      </Routes>
    </WrapperContent>
  )
}

export default App;