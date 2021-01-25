import React, { useContext } from 'react';
import { StarWarsContext, FILTER_REMOVE } from '../context';

export default function SetedsFilters() {
  const { filters: { filterByNumericValues }, dispatchFilter,
  } = useContext(StarWarsContext);
  if (!filterByNumericValues.length) return <div />;
  return (
    <ul>
      {filterByNumericValues.map(({ column }, index) => (
        <li data-testid="filter" key={ index }>
          {column}
          <button
            type="button"
            onClick={ () => {
              dispatchFilter({ type: FILTER_REMOVE, payload: column });
            } }
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}
