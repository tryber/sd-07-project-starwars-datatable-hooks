import React from 'react';
import './App.css';
import FilterByName from './components/FilterByName';
import FilterByNumericValues from './components/FilterByNumericValues';
import Provider from './components/Provider';
import Table from './components/Table';

function App() {
  return (
    <div>
      <Provider>
        <FilterByName />
        <FilterByNumericValues />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
