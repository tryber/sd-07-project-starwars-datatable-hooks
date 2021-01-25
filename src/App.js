import React from 'react';
import './App.css';
import Header from './components/Header';
import PlanetsGrid from './components/PlanetsGrid';

import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <div className="App">
        <table>
          <Header />
          <PlanetsGrid />
        </table>
      </div>
    </PlanetsProvider>
  );
}

export default App;
