import React from 'react';
import StarWarsProvider from './context/StarWarsContext';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <StarWarsProvider>
      <div className="App" />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
