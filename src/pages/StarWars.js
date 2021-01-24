import React from 'react';
import { Filters, Table, Header } from '../components/index';

function StarWars() {
  return (
    <div>
      <Header />
      <Filters />
      <Table />
    </div>
  );
}

export default StarWars;
