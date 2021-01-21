import React from 'react';
import './App.css';
import Provider from './context/Provider';
import PlanetsTable from './components';

function App() {
  return (
    <Provider>
      <PlanetsTable />
    </Provider>
  );
}

export default App;
