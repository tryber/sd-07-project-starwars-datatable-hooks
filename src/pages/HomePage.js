import React from 'react';
import InputTxt from '../components/InputTxt';
import Filters from '../components/Filters';
import Table from '../components/Table';

function HomePage() {
  return (
    <div>
      <InputTxt />
      <Filters />
      <Table />
    </div>
  );
}

export default HomePage;
