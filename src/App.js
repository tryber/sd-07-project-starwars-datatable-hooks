import React from 'react';
import PlanetsTable from './components/PlanetsTable';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import PlanetsFilters from './components/PlanetsFilters';

function App() {
  return (
    <StarWarsProvider>
      <PlanetsFilters />
      <PlanetsTable />
    </StarWarsProvider>
  );
}

export default App;
