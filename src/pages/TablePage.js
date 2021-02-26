import React from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import Filters from '../components/Filters';
import OrderFilter from '../components/OrderFilter';

function TablePage() {
  return (
    <div>
      <Header />
      <Filters />
      <OrderFilter />
      <Table />
    </div>
  );
}

export default TablePage;
