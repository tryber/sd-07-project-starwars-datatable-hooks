import React from 'react';
import PlanetsTable from './components/PlanetsTable';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <PlanetsTable />
    </StarWarsProvider>
  );
}

export default App;
