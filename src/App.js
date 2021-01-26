import React from 'react';
import NameFilter from './components/NameFilter';
import NumericFilter from './components/NumericFilter';
import Table from './components/Table';
import StarWarsProvider from './provider/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <NameFilter />
      <NumericFilter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
