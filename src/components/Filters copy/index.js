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
      <Filter key={ 0 } index={ 0 } arrayColumns={ arrayColumns } />
      {
        // (filterByNumericValues.length < maxFilter)
        filterByNumericValues.map((_element, index) => {
          if (index < arrayColumns.length - 1) {
            return (
              <Filter
                key={ index + 1 }
                index={ index + 1 }
                arrayColumns={ arrayColumns }
              />
            );
          }
          return false;
        })

      }
      {
        (filterByNumericValues.length) ? <ClearFilters /> : null
      }
    </div>
  );
};

export default Filters;
