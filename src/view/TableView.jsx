import React from 'react';
import Inputs from '../components/inputs';
import Table from '../components/Table';

function TableView() {
  return (
    <div>
      {Inputs('name-filter')}
      <Table />
    </div>
  );
}

export default TableView;
