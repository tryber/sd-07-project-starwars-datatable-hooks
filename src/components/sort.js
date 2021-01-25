import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Sort() {
  const {
    setFilters,
    filters,
    filterData,
    setSortedData,
    setUseSortedData,
  } = useContext(StarWarsContext);

  const sortColumn = (value) => {
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        column: value,
      },
    });
  };

  const sortOrder = (value) => {
    setFilters({
      ...filters,
      order: {
        ...filters.order,
        sort: value,
      },
    });
  };

  const compareASC = (a, b) => {
    const { column } = filters.order;

    const dataA = a[column];
    const dataB = b[column];

    const dataANum = parseInt(dataA, 10);
    const dataBNum = parseInt(dataB, 10);

    const zero = 0;
    let comparison = zero;
    const plusOne = 1;
    const minusOne = -1;
    if (Number.isNaN(dataANum) || Number.isNaN(dataBNum)) {
      if (dataA > dataB) {
        comparison = plusOne;
      } if (dataA < dataB) {
        comparison = minusOne;
      }
      return comparison;
    }

    if (dataANum > dataBNum) {
      comparison = plusOne;
    } if (dataANum < dataBNum) {
      comparison = minusOne;
    }
    return comparison;
  };

  const compareDESC = (a, b) => {
    const { column } = filters.order;

    const dataA = a[column];
    const dataB = b[column];

    const dataANum = parseInt(dataA, 10);
    const dataBNum = parseInt(dataB, 10);

    const zero = 0;
    let comparison = zero;
    const plusOne = 1;
    const minusOne = -1;
    if (Number.isNaN(dataANum) || Number.isNaN(dataBNum)) {
      if (dataA < dataB) {
        comparison = plusOne;
      } if (dataA > dataB) {
        comparison = minusOne;
      }
      return comparison;
    }

    if (dataANum < dataBNum) {
      comparison = plusOne;
    } if (dataANum > dataBNum) {
      comparison = minusOne;
    }
    return comparison;
  };

  const doTheSort = () => {
    const { sort } = filters.order;
    const cloneFilterData = [...filterData];
    if (sort === 'ASC') {
      cloneFilterData.sort(compareASC);
    } else {
      cloneFilterData.sort(compareDESC);
    }
    // sort === 'ASC' ? cloneFilterData.sort(compareASC) : cloneFilterData.sort(compareDESC);
    setSortedData(cloneFilterData);
    setUseSortedData(true);
  };

  useEffect(() => {
    doTheSort();
  }, [filterData]);

  const columns = [
    'climate',
    'created',
    'diameter',
    'edited',
    'films',
    'gravity',
    'name',
    'orbital_period',
    'population',
    'rotation_period',
    'surface_water',
    'terrain',
    'url',
  ];

  return (
    <StarWarsContext.Consumer>
      {() => (
        <div>
          <h1>Sort</h1>
          <label htmlFor="columns">
            Selecione uma coluna
            <select
              data-testid="column-sort"
              id="columns"
              onClick={ (event) => sortColumn(event.target.value) }
            >
              {columns.map((item) => (
                <option key={ item }>{ item }</option>
              ))}
            </select>
          </label>

          <label htmlFor="ASC">
            <input
              data-testid="column-sort-input-asc"
              name="sort"
              type="radio"
              id="ASC"
              value="ASC"
              onClick={ (event) => sortOrder(event.target.value) }
            />
            Ascendente
          </label>
          <label htmlFor="DESC">
            <input
              data-testid="column-sort-input-desc"
              name="sort"
              type="radio"
              id="DESC"
              value="DESC"
              onClick={ (event) => sortOrder(event.target.value) }
            />
            Descendente
          </label>
          <button
            data-testid="column-sort-button"
            type="button"
            onClick={ doTheSort }
          >
            Ordenar
          </button>
        </div>
      )}
    </StarWarsContext.Consumer>
  );
}

export default Sort;
