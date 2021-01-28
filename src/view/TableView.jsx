import React from 'react';
import Dropdowns from '../components/dropdowns';
import Inputs from '../components/inputs';
import Table from '../components/Table';
import Buttons from '../components/buttons';

const firstDropdown = [
  'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
];

const secondDropdown = [
  'maior que', 'menor que', 'igual a',
];

function TableView() {
  return (
    <div>
      <div>
        {Inputs('name-filter', 'name')}
        {Dropdowns('column', firstDropdown)}
        {Dropdowns('comparison', secondDropdown)}
        {Inputs('value-filter', 'numbers')}
        {Buttons('button-filter', 'Filtrar')}
      </div>
      <Table />
    </div>
  );
}

export default TableView;
