import React from 'react';
import Provider from './context/StarWarsProvider';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <Table />
    </Provider>
  );
}

export default App;
