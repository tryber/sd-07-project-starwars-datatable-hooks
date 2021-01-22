import React from 'react';

import './App.css';
import StarWarsṔrovider from './context/StarWarsProvider';
import Table from './components/Table/index';
import FilterAll from './components/Filters/FilterAll';

function App() {
  return (
    <main>
      <StarWarsṔrovider>
        <FilterAll />
        <Table />
      </StarWarsṔrovider>
    </main>
  );
}

export default App;
