import React, { useContext } from 'react';
import context from '../../context';

const ListFilters = () => {
  const { filters, removeFiltersNumerics } = useContext(context);
  const { filterByNumericValues } = filters;
  return (
    filterByNumericValues.map((item, index) => (
      <div key={ index } data-testid="filter">
        <button
          type="button"
          onClick={ () => removeFiltersNumerics(index) }
          onKeyPress={ removeFiltersNumerics }
        >
          X
        </button>
        <span>{item.column}</span>
        <span>{item.comparison}</span>
        <span>{item.value}</span>
      </div>
    ))
  );
};

export default ListFilters;
