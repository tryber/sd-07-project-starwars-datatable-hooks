import React from 'react';

import { StarWarsProvider } from './context/StarWarsContext';

import Table from './components/Table';
import Filters from './components/Filters';

function App() {
  return (
    <StarWarsProvider>
      <Filters />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
