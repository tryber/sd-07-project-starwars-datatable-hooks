import React from 'react';
import PlanetProvider from './context/StarWarsProvider';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <PlanetProvider>
        <Table />
      </PlanetProvider>
    </div>
  );
}

export default App;
