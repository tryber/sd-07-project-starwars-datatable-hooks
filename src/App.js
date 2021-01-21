import React from 'react';
import Provider from './context/StarWarsProvider';
import PlanetsTable from './components/PlanetsTable';
import './App.css';

function App() {
  return (
    <Provider>
      <PlanetsTable />
    </Provider>
  );
}

export default App;
