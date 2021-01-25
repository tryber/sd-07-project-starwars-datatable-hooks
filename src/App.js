import React from 'react';

import Provider from './context/ProviderStarWars';
import Table from './components/Table';
import FilterName from './components/FilterName';
import FilterNumeric from './components/FilterNumeric';

function App() {
  return (
    <Provider>
      <FilterName />
      <FilterNumeric />
      <Table />
    </Provider>
  );
}

export default App;
