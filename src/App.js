import React from 'react';
import PlanetContextProvider from './contexts/PlanetContext';
import FilterContextProvider from './contexts/FilterContext';
import Navbar from './components/Navbar';
import PlanetsTable from './components/PlanetsTable';
import Filters from './components/Filters';

function App() {
  return (
    <div>
      <Navbar />
      <PlanetContextProvider>
        <FilterContextProvider>
          <Filters />
          <PlanetsTable />
        </FilterContextProvider>
      </PlanetContextProvider>
    </div>
  );
}

export default App;
