import React from 'react';
// import StarWarsContext from '../context/StarWarsContext';
import FilterBar from '../components/FilterBar';
import Table from '../components/Table/index';

function InitialPage() {
  return (
    <>
      <FilterBar />
      <Table />
    </>
  );
}

export default InitialPage;
