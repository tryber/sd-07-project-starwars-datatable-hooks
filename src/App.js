import React from 'react';
import Provider from './context/StarWarsProvider';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNumbers from './components/FilterByNumbers';

function App() {
  return (
    <div>
      <Provider>
        <h2>Star Wars - Planets Data Table</h2>
        <FilterByName />
        <FilterByNumbers />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
