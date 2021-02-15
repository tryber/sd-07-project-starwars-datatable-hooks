import React from 'react';
import Table from './component/Table';
import Provider from './context/Provider';
import FilterByName from './component/FilterByName';

function App() {
  return (
    <div>
      <Provider>
        <Table />
        <FilterByName />
      </Provider>
    </div>
  );
}

export default App;
