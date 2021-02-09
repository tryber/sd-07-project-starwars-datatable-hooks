import React from 'react';
import './App.css';
import Provider from './context/Provider';
import PlanetTable from './component/PlanetTable';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <Provider>
      <SearchBar />
      <PlanetTable />
    </Provider>
  );
}

export default App;
