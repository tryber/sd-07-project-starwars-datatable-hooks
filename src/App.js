import React from 'react';
import Provider from './context/Provider';
import Filters from './Filters';
import Table from './Table';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
