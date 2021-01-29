import React from 'react';
import Table from './component/Table';
import FilterPlanets from './component/FilterPlanets';
import Provider from './context/Provider';
import ListFilter from './component/ListFilter';

function App() {
  return (
    <Provider>
      <div>
        <FilterPlanets />
        <ListFilter />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
