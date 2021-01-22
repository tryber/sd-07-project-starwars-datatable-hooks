import React from 'react';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <div>
      <StarWarsProvider>
        <Filter />
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
