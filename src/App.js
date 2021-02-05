import React from 'react';
import Filter from './pages/Filter';
import StrWrs from './context';
import './App.css';

function App() {
  const initial = '';

  return (
    <StrWrs.Provider value={ initial }>
      <div className="App">
        <Filter />
      </div>
    </StrWrs.Provider>
  );
}

export default App;
