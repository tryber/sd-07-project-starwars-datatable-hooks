import React from 'react';
import Table from './Components/Table';
import StarWarsContextProvider from './context/StarWarsContextProvider';

function App() {
  return (
    <StarWarsContextProvider>
      <Table />
    </StarWarsContextProvider>
  );
}

export default App;
