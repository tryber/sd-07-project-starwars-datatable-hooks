import React from 'react';
import Table from './components/Table';
import FilterByName from './components/FilterByName';
import { Provider } from './context/StarWarsContext';

import './App.css';

function App() {
  return (
    <Provider>
      <FilterByName />
      <Table />
    </Provider>
  );
}

export default App;
