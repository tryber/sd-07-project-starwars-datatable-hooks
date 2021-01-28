import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import DropDown from './DropDown';

const columnOptions = [
  'name',
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function OrderColumn() {
  const [selectValue, setSelectValue] = useState('name');
  const [radioValue, setRadioValue] = useState('ASC');
  const { dispatch, setCustomFilter } = useContext(StarWarsContext);

  const OrderColum = () => {
    setCustomFilter(true);
    const newOrder = {
      column: selectValue,
      sort: radioValue,
    };
    dispatch({ type: 'ORDER_COLUMN', payload: newOrder });
  };

  return (
    <div>
      {'Ordernar por: '}
      <DropDown
        id="column"
        dataTest="column-sort"
        options={ columnOptions }
        selectValue={ selectValue }
        handleChange={ ({ target }) => {
          setSelectValue(target.value);
          setCustomFilter(false);
        } }
      />
      <div
        onChange={ ({ target }) => {
          setRadioValue(target.value);
          setCustomFilter(false);
        } }
      >
        <input
          type="radio"
          value="ASC"
          name="order"
          checked={ radioValue === 'ASC' }
          data-testid="column-sort-input-asc"
        />
        Ascendent
        <input
          type="radio"
          value="DESC"
          name="order"
          checked={ radioValue === 'DESC' }
          data-testid="column-sort-input-desc"
        />
        Decrescente
        <button
          type="button"
          data-testid="column-sort-button"
          onClick={ OrderColum }
        >
          Ordernar
        </button>

      </div>
    </div>
  );
}

export default OrderColumn;
