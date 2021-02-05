import React from 'react';
import Filter from './pages/Filter';
import Provider from './context/provider';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Filter />
      </div>
    </Provider>
  );
}

export default App;
