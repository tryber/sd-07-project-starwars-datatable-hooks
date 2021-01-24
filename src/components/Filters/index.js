import React, { useContext } from 'react';
import { Filter, ClearFilters } from '../index';
import context from '../../context';

const Filters = () => {
  const arrayColumns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  const { filters } = useContext(context);
  const { filterByNumericValues } = filters;
  return (
    <div>
      <Filter arrayColumns={ arrayColumns } />
      {
        (filterByNumericValues.length) ? <ClearFilters /> : null
      }
    </div>
  );
};

export default Filters;
