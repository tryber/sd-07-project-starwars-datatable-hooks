import React from 'react';
import Header from './components/Header';
import PlanetProvider from './context/StarWarsProvider';
import PlanetList from './pages/PlanetList';

function App() {
  return (
    <div className="App">
      <PlanetProvider>
        <Header />
        <PlanetList />
      </PlanetProvider>
    </div>
  );
}

export default App;
