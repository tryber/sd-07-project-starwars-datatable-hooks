import React from 'react';
import Provider from './context/StarWarsProvider';
import Table from './components/Table';
import Filter from './components/Filter';

function App() {
  return (
    <Provider>
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
