import React from 'react';
import { Provider } from './context';
import { Table, InputSearch, Filter, OrderColumn, SetedsFilters } from './components';

function App() {
  return (
    <Provider>
      <SetedsFilters />
      <Filter />
      <OrderColumn />
      <InputSearch />
      <Table />
    </Provider>
  );
}

export default App;
