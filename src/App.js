import React from 'react';
import Table from './Table';
import StarWarsProvider from './StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <Table />
    </StarWarsProvider>
  );
}

export default App;
