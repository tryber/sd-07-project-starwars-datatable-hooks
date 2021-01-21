import React from 'react';
import './App.css';
import Provider from './context/Provider';
import components from './components';

function App() {
  const { FilterName, PlanetsTable } = components;
  return (
    <Provider>
      <FilterName />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
