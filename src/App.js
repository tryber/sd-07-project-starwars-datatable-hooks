import React from 'react';

import { StarWarsProvider } from './context/Provider';
import Table from './components/Table';
import TextFilter from './components/TextFilter';

import './App.css';

function App() {
  return (
    <StarWarsProvider>
      <TextFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
