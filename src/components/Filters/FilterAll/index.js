import React, { useContext } from 'react';
import StarWarsContext from '../../../context/StarWarsContext';

import FilterByName from '../FilterByName/index';
import FilterNumericValues from '../FilterNumericValues/index';

function FilterAll() {
  const { handleActiveFilter } = useContext(StarWarsContext);
  return (
    <div>
      <FilterByName />
      <FilterNumericValues />
      <button type="button" onClick={ handleActiveFilter } data-testid="button-filter">
        Acionar Numeric Filter
      </button>
    </div>
  );
}

export default FilterAll;
