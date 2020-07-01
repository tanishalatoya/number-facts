import React, { useState } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import FactContainer from '../FactContainer/FactContainer';
import './App.css';

function App() {
  const [numberFact, udpateNumberFact] = useState('')

  return (
    <div className="App">
      <SearchForm udpateNumberFact={udpateNumberFact} />
      <FactContainer numberFact={numberFact} />
    </div>
  );
}

export default App;
