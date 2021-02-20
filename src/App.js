import React from 'react';
import PlanetProvider from './context/StarWarsProvider';
import PlanetList from './components/PlanetList';

function App() {
  return (
    <div className="App">
      <PlanetProvider>
        <PlanetList />
      </PlanetProvider>
    </div>
  );
}

export default App;
