import React from 'react';
import './App.css';
import StarWarsṔrovider from './context/StarWarsProvider';

import Filters from './components/Filters/index';
import Table from './components/Table/index';

function App() {
  return (
    <main>
      <StarWarsṔrovider>
        <Filters />
        <Table />
      </StarWarsṔrovider>
    </main>
  );
}

export default App;
