import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from '../context/Context';

export default function OrderForm({ types }) {
  const {
    setOrder,
    filters: { order },
  } = useContext(SWContext);
  const [type, setType] = useState(order.column);
  const [orderState, setOrderState] = useState(order.sort);
  return (
    <div>
      <select
        data-testid="column-sort"
        onChange={ (e) => setType(e.target.value) }
      >
        {types.map((typ) => (
          <option key={ typ } value={ typ }>
            {typ}
          </option>
        ))}
      </select>
      <div onChange={ (e) => setOrderState(e.target.value) }>
        <label htmlFor="asc">
          asc
          <input
            id="asc"
            type="radio"
            name="sort"
            value="asc"
            data-testid="column-sort-input-asc"
          />
        </label>
        <label htmlFor="desc">
          desc
          <input
            id="desc"
            type="radio"
            name="sort"
            value="desc"
            data-testid="column-sort-input-desc"
          />
        </label>
      </div>
      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ () => setOrder({ column: type, sort: orderState }) }
      >
        Submit
      </button>
    </div>
  );
}

OrderForm.propTypes = {
  types: PropTypes.func.isRequired,
};
