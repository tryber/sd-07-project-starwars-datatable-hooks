import React from 'react';
import './App.css';
import Provider from './context/Provider';
import components from './components';

function App() {
  const {
    InputFilterName,
    PlanetsTable,
    FormFilterNumericValue,
    ListFilterNumeric,
    FormSort,
  } = components;
  return (
    <Provider>
      <InputFilterName />
      <FormFilterNumericValue />
      <ListFilterNumeric />
      <FormSort />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
