import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import Filter from './components/Filter';
import NumericFilter from './components/numericFilters';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <NumericFilter />
        <Filter />
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
