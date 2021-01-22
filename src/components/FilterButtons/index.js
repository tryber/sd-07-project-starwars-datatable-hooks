import React, { useContext } from 'react';
import { StarWarsContext } from '../../providers/StarWarsProvider';

const FilterButtons = () => {
  const { filterFuncs: { resetFilters } } = useContext(StarWarsContext);

  return (
    <div data-testid="filter">
      { Array.from({ length: 11 }).map((value) => (
        <button type="button" onClick={ resetFilters } key={ value }>
          X
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
