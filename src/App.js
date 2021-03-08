import React from 'react';
import Table from './components/Table';
import Provider from './context/Provider';
import FilterByName from './components/FilterByName';
import NumberFilter from './components/NumberFilter';
import ClearFilter from './components/ClearFilter';
import FilterOrder from './components/FilterOrder';

// separando todos os requisitos em componentes como a Camila falou

function App() {
  return (
    <div>
      <Provider>
        <FilterByName />
        <NumberFilter />
        <ClearFilter />
        <FilterOrder />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
