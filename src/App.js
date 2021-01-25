import React from 'react';
import Table from './component/Table';
import FilterPlanets from './component/FilterPlanets';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div>
        <FilterPlanets />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
