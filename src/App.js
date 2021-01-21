import React from 'react';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';
import { Provider } from './context/StarWarsContext';

import './App.css';

function App() {
  return (
    <Provider>
      <FilterByName />
      <FilterByNumericValues />
      <Table />
    </Provider>
  );
}

export default App;
