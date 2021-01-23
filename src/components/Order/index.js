import React, { useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function Order() {
  const { handleChangeOrder, header, filter } = useContext(StarWarsContext);
  const { name } = filter.order;
  return (
    <div>
      <select
        data-testid="column-sort"
        name="column"
        value={ name }
        onChange={ handleChangeOrder }
      >
        {!header && <option>Loading</option>}
        {header
          && header.map((element) => (
            <option key={ element } value={ element }>
              {element}
            </option>
          ))}
      </select>

      <label htmlFor="ASC">
        ASC
        <input
          data-testid="column-sort-input-desc"
          id="ASC"
          onChange={ handleChangeOrder }
          type="radio"
          name="sort"
          value="ASC"
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          data-testid="column-sort-button"
          id="DESC"
          onChange={ handleChangeOrder }
          type="radio"
          name="sort"
          value="DESC"
        />
      </label>
    </div>
  );
}

export default Order;
