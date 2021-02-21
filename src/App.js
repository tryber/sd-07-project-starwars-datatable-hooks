import React from 'react';
import Table from './component/Table';
import Provider from './context/Provider';
import FilterByName from './component/FilterByName';
import FilterNumber from './component/FilterNumber';
import FilterClear from './component/FilterClear';
import FilterOrder from './component/FilterOrder';

function App() {
  return (
    <div>
      <Provider>
        <FilterByName />
        <FilterNumber />
        <FilterClear />
        <FilterOrder />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
