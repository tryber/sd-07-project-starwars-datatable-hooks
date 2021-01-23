import React from 'react';
import NameFilter from './NameFilter';
import NumericFilter from './NumericFilter';

function FiltersHeader() {
  return (
    <>
      <NameFilter />
      <NumericFilter />
    </>
  );
}

export default FiltersHeader;
