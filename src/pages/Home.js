import React from 'react';
import Table from '../components/Table';
import SearchName from '../components/SearchName';
import SearchNumber from '../components/SearchNumber';

function Home() {
  return (
    <div>
      <h1>Star Wars - Datatable</h1>
      <SearchName />
      <SearchNumber />
      <Table />
    </div>
  );
}

export default Home;
