import React from 'react';
import PlanetsTable from './components/PlanetTable';
import PlanetContextProvider from './contexts/PlanetContext';

function App() {
  return (
    <div>
      <PlanetContextProvider>
        <PlanetsTable />
      </PlanetContextProvider>
    </div>
  );
}

export default App;
