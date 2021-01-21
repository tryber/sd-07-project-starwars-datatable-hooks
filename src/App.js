import React from 'react';
import Table from './components/Table';
import Filter from './components/Filter';
import Provider from './context/Provider';

function App() {
  return (
    <div>
      <Provider>
        <Filter />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
