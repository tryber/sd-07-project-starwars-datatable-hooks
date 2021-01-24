import React from 'react';
import Provider from './context/Provider';
import Table from './context/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
