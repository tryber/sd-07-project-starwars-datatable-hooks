import React from 'react';

import { StarWarsProvider } from './context/StarWarsContext';

import Table from './components/Table';
import NumberFilter from './components/Filters/NumberFilter';
import NameFilter from './components/Filters/NameFilter';

function App() {
  return (
    <StarWarsProvider>
      <NameFilter />
      <NumberFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
