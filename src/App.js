import React, { useContext } from 'react';
import './App.css';
import Provider from './context/Provider';
import PlanetTable from './component/PlanetTable'
import SearchBar from './component/SearchBar'
import StarWarsContext from './context/starWarsContext';

function App() {
  // const { filterPlanets } = useContext(StarWarsContext);
  return (
    <Provider>
      <SearchBar />
      <PlanetTable />
      {/* {filterPlanets.length === 0 ? 'loading' : */}
      {/* <PlanetTable />} */}
    </Provider>
  );
}

export default App;
