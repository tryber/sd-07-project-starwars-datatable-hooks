import React from 'react';
import Table from './Table';
import StarWarsProvider from './StarWarsProvider';
import Filter from './Filter';

function App() {
  return (
    <StarWarsProvider>
      <Filter />
      <Table />
    </StarWarsProvider>
  );
}

export default App;
