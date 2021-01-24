import React, { useContext } from 'react';
import { StarWarsContext, FILTER_REMOVE } from '../context';

export default function useFiltersArr() {
  const { filters: { filterByNumericValues }, dispatchFilter,
  } = useContext(StarWarsContext);
  if (!filterByNumericValues.length) return null;
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
