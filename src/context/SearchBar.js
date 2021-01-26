import React, { useContext, useState, useEffect } from 'react';
import StarWarsContext from './StarWarsContext';

function SearchBar() {
  const { setSelect, setFilterName, filters } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('0');
  const optionColumn = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  const inclusos = filters.filterByNumericValues.map((item) => item.column);
  const select = optionColumn.filter((item) => !inclusos.includes(item));
  // referência: Luciano Berchon
  useEffect(() => {
    setColumn(select[0]);
  }, [filters]);

  return (
    <div>
      <input
        type="text"
        name="search"
        onChange={ ((event) => setFilterName(event.target.value)) }
        data-testid="name-filter"
      />
      <select data-testid="column-filter" onChange={ (e) => setColumn(e.target.value) }>
        {select.map((item) => <option value={ item } key={ item }>{item}</option>)}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setComparison(e.target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setValue(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setSelect(column, comparison, value) }
      >
        Filters
      </button>
    </div>
  );
}

export default SearchBar;
