import React from 'react';
import Table from '../components/Table/Table';
import { FilterByName, CompareFilter, OrderFilter } from '../components/Filters';

function StarWarsPage() {
  return (
    <>
      <FilterByName />
      <br />
      <CompareFilter />
      <br />
      <OrderFilter />
      <Table />
    </>
  );
}

export default StarWarsPage;
