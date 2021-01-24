import React from 'react';
import { Provider } from './context';
import { Table, InputSearch, Filter } from './components';

function App() {
  return (
    <Provider>
      <InputSearch />
      <Filter />
      <Table />
    </Provider>
  );
}

export default App;
