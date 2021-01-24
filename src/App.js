import React from 'react';
import Table from './Table';
import { StarWarsProvider } from './context/StarWarsContext';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
