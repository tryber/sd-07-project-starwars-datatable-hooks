import React from 'react';
import './App.css';
import Provider from './context/Provider';
import components from './components';

function App() {
  const { InputFilterName, PlanetsTable, FormFilterNumericValue } = components;
  return (
    <Provider>
      <InputFilterName />
      <FormFilterNumericValue />
      <PlanetsTable />
    </Provider>
  );
}

export default App;
