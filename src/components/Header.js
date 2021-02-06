import React from 'react';
import FilterByName from './FilterByName';
import FilterByNumbers from './FilterByNumbers';

function Header() {
  return (
    <div>
      <FilterByName />
      <FilterByNumbers />
    </div>
  );
}

export default Header;
