import React from 'react';
import Table from './component/Table';
import Provider from './context/Provider';
import FilterByName from './component/FilterByName';
import FilterNumber from './component/FilterNumber';

function App() {
  return (
    <div>
      <Provider>
        <Table />
        <FilterByName />
        <FilterNumber />
      </Provider>
    </div>
  );
}

export default App;
