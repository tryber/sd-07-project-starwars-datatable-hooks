import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function OrderList() {
  const { updateOrderAscDesc } = useContext(PlanetsContext);
  const columnsToOrder = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const updateOrderValues = () => {
    const column = document.getElementById('column-sort').value;
    const sortInputAsc = document.getElementById('column-sort-input-asc').checked;

    let sort;
    if (sortInputAsc) {
      sort = 'ASC';
    } else {
      sort = 'DESC';
    }

    updateOrderAscDesc({ column, sort });
  };

  return (
    <div>
      <span>Sort column</span>
      <select data-testid="column-sort" name="column-sort" id="column-sort">
        {columnsToOrder
          .map((column, index) => (
            <option
              key={ `sort+${index}` }
              value={ column }
            >
              { column }
            </option>))}
      </select>
      <input
        type="radio"
        name="sort-radio"
        data-testid="column-sort-input-asc"
        value="asc"
        id="column-sort-input-asc"
      />
      ASC
      <input
        type="radio"
        name="sort-radio"
        data-testid="column-sort-input-desc"
        value="desc"
        id="column-sort-input-desc"
      />
      DESC
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ updateOrderValues }
      >
        Order
      </button>
    </div>
  );
}

export default OrderList;
