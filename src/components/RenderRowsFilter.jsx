import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import './RenderRowsFilter.css';

function RenderRowsFilter() {
  const context = useContext(StarWarsContext);
  const { allContext } = context;
  const { filterNumber, setFilterNumber } = allContext;

  function Remove(ind) {
    return setFilterNumber(filterNumber.filter((fil, index) => index !== ind));
  }

  return filterNumber.map((filter, ind) => {
    const dois = 2;
    const zero = 0;
    return (
      <tr key={ filter.column } data-testid="filter" className="corpo">
        <td className={ ind % dois === zero ? 'Par' : '' } data-testid="filter">
          {filter.column}
        </td>
        <td className={ ind % dois === zero ? 'Par' : '' } data-testid="filter">
          {filter.comparison}
        </td>
        <td className={ ind % dois === zero ? 'Par' : '' } data-testid="filter">
          {filter.value}
        </td>
        <td className={ ind % dois === zero ? 'Par' : '' } data-testid="filter">
          <button type="button" onClick={ () => Remove(ind) }>
            X
          </button>
        </td>
      </tr>
    );
  });
}

export default RenderRowsFilter;
