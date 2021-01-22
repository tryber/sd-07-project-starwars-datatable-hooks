import React from 'react';

import FilterByName from '../FilterByName/index';
import FilterNumericValues from '../FilterNumericValues/index';

function FilterAll() {
  return (
    <div>
      <FilterByName />
      <FilterNumericValues />
    </div>
  );
}

export default FilterAll;
