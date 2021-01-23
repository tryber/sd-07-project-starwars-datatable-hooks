import React from 'react';

import FilterByName from './FilterByName';
import FilterNumericValues from './FilterNumericValues';

function FilterAll() {
  return (
    <div>
      <FilterByName />
      <FilterNumericValues />
    </div>
  );
}

export default FilterAll;
