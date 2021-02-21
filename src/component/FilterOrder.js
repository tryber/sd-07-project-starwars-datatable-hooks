import React from 'react';

function FilterOrder() {
  // const handleChange = ({ target }) => {
  //   const { value } = target;
  //   setOrder(value);
  // };
  // const filterOrderOnClick = () => {
  //   setOrder(
  //     {
  //       column: 'Name',
  //       sort: 'ASC',
  //     },
  //   );
  // };
  return (
    <div>
      <select data-testid="column-sort">
        <option>test</option>
      </select>
      <label htmlFor="asc">
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          id="asc"
          name="order"
          value="asc"

        />
        ASC
      </label>
      <label htmlFor="desc">
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          id="desc"
          name="order"
          value="desc"

        />
        DESC
      </label>
      <button
        type="button"
        data-testid="column-sort-button"

      >
        Ordenar
      </button>
    </div>

  );
}

export default FilterOrder;
