import React from 'react';
import { Table, FilterInput } from './components';
import './App.css';
import StarWarsProvider from './providers/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <div className="App">
        <FilterInput />
        <Table />
      </div>
    </StarWarsProvider>
  );
}

export default App;
