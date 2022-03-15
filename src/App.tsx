import React from 'react';
import WrapperContent from './components/WrapperContent';
import Header from './components/Header';
import SearchContent from './components/SearchContent';

const App: React.FC = () => {
  return (
    <WrapperContent>
      <Header />
      <SearchContent />
    </WrapperContent>
  );
}

export default App;