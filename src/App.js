import React from 'react';
import Provider from './context/StarWarsProvider';
import Table from './components/Table';

const App = () => (
  <Provider>
    <Table />
  </Provider>
);

export default App;
