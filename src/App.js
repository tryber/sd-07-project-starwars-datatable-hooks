import React from 'react';
import InitialPage from './pages/InitialPage';
import PlanetsContextProvider from './context/PlanetContextProvider';
import FilterContextProvider from './context/FilterContextProvider';

const App = () => (
  <FilterContextProvider>
    <PlanetsContextProvider>
      <InitialPage />
    </PlanetsContextProvider>
  </FilterContextProvider>
);

export default App;
