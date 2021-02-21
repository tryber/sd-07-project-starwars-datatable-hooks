import React from 'react';
import Table from '../components/Table';
import Header from '../components/Header';
import Filters from '../components/Filters';

function TablePage() {
  return (
    <div>
      <Header />
      <Filters />
      <Table />
    </div>
  );
}

export default TablePage;
