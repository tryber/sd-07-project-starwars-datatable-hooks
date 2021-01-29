import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import SelectComponent from './SelectComponent';

function InputSearch() {
  const {
    filter,
    setFilter,
    data,
    setData,
    setRevert,
    revertFilter,
  } = useContext(StarWarsContext);
  const [object, setObject] = useState({
    column: '',
    comparison: '',
    value: 0,
  });

  const handleFilter = ({ target }) => setFilter(
    { filters: { ...filter.filters,
      filterByName: { name: target.value },
      filterByNumericValues: [...filter.filters.filterByNumericValues] } },
  );
  const selectFilter = (objected) => {
    setFilter({
      filters: { ...filter.filters,
        filterByNumericValues: [...filter.filters.filterByNumericValues, objected] } });
  };
  const setObjectFilter = ({ target }) => setObject(
    { ...object, [target.name]: target.value },
  );

  const updateListFunc = (objector) => {
    let filteredGambiarra = [...filter.filters.filterByNumericValues];
    if (objector) filteredGambiarra = [...filter.filters.filterByNumericValues, objector];
    if (data !== 'Loading') {
      const rdx = 10;
      filteredGambiarra
        .forEach(({ column = false, comparison = false, value = false }) => {
          if (column && comparison && value) {
            switch (comparison) {
            case 'maior que':
              setRevert({ ...revertFilter, [column]: data.results });
              return setData({ results: data.results
                .filter((rtl) => parseInt(rtl[column], rdx) > parseInt(value, rdx)) });
            case 'menor que':
              setRevert({ ...revertFilter, [column]: data.results });
              return setData({ results: data.results
                .filter((rtl) => parseInt(rtl[column], rdx) < parseInt(value, rdx)) });
            default:
              setRevert({ ...revertFilter, [column]: data.results });
              return setData({ results: data.results
                .filter((rtl) => parseInt(rtl[column], rdx) === parseInt(value, rdx)) });
            }
          }
        });
    }
  };

  return (
    <form>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ handleFilter }
        value={ filter.filters.filterByName.name }
      />
      <SelectComponent
        updateListFunc={ updateListFunc }
        setObjectFilter={ setObjectFilter }
        selectFilter={ selectFilter }
        object={ object }
      />
    </form>
  );
}

export default InputSearch;
