import React, { useContext } from 'react';
import context from '../../context';

const ClearFilters = () => {
  const { clearFiltersNumerics } = useContext(context);
  return (
    <div>
      <button
        type="button"
        data-testid="filter"
        onClick={ clearFiltersNumerics }
        onKeyPress={ clearFiltersNumerics }
      >
        X
      </button>
    </div>
  );
};

export default ClearFilters;
