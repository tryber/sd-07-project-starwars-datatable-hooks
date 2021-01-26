import React from 'react';
import './App.css';
import Header from './components/Header';
import PlanetsGrid from './components/PlanetsGrid';
import FilterGrid from './components/FilterGrid';

import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="App">
        <FilterGrid />
        <table>
          <Header />
          <PlanetsGrid />
        </table>
      </div>
    </PlanetsProvider>
  );
}

export default App;
