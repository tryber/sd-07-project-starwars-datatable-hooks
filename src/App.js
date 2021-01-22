import React from 'react';
import PlanetsList from './components/PlanetsList';
import Filter from './components/Filter';
import ProviderStarWars from './context/Provider';

function App() {
  return (
    <div>
      <ProviderStarWars>
      <Filter/>
      <PlanetsList />
      </ProviderStarWars>
    </div>
  );
}

export default App;
//{showMap && <ISSLocation />}