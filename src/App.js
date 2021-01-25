import React from 'react';
import { Provider } from './context';
import { Table, InputSearch, Filter, OrderColumn, SetedsFilters } from './components';

function App() {
  return (
    <Provider>
      <InputSearch />
      <SetedsFilters />
      <Filter />
      <OrderColumn />
      <Table />
    </Provider>
  );
}

export default App;
