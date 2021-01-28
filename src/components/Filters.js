import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const Filters = () => {
  const { filters, setFilters, starWars, setStarWars } = useContext(StarWarsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState('');

  const handleFilter = (({ target }) => {
    setFilters({
      ...filters,
      filterByName: {
        name: target.value,
      },
    });
  });

  // const handleClick = () => {
  //   handleFilterButton({ column, comparison, value })
  // }

  const handleFilterButton = () => {
    // const index = filters.filterByNumericValues.length;
    // console.log(index)
    const newValues = { column, comparison, value };
    const { filterByNumericValues: filter } = filters;
    console.log(document.getElementsByTagName('option')[0].value);
    setColumn(document.getElementsByTagName('option')[0].value);
    setFilters({
      ...filters,
      filterByNumericValues: [...filter, newValues],
    });
    if (comparison === 'maior que') {
      setStarWars(starWars.filter((item) => +value < item[column]));
    } if (comparison === 'menor que') {
      setStarWars(starWars.filter((item) => +value > item[column]));
    } if (comparison === 'igual a') {
      setStarWars(starWars.filter((item) => value === item[column]));
    }
  };

  // const handleFilterNumeric = ({ target }) => {
  //   const { name, value } = target;
  //   setFilterValue({
  //     ...filterValue,
  //     [name]: value,
  //   });
  // };
  // pesquisa feita para converter string em number
  // https://stackabuse.com/javascript-convert-string-to-number/

  const onlyNumber = (event) => {
    const theEvent = event || window.event;
    let key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    const regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };

  console.log(filters.filterByNumericValues);
  const columns = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];

  return (
    <div>
      <label htmlFor="name-filter">
        Digite sua busca:
        <input
          name="name"
          data-testid="name-filter"
          type="text"
          onChange={ handleFilter }
        />
      </label>
      <label htmlFor="number-filter">
        Filtros:
        <select
          name="column"
          data-testid="column-filter"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          {columns.map((item) => {
            let deleteOption = false;
            if (filters.filterByNumericValues !== []) {
              filters.filterByNumericValues.forEach((itemFilter) => {
                if (item === itemFilter.column) {
                  deleteOption = true;
                  return undefined;
                }
              });
            }
            if (deleteOption) {
              deleteOption = false;
              return undefined;
            }
            return (<option value={ item } key={ item }>{ item }</option>);
          })}
        </select>
        <select
          name="comparison"
          data-testid="comparison-filter"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          data-testid="value-filter"
          type="text"
          name="value"
          onKeyPress={ onlyNumber }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleFilterButton }
      >
        Filtrar
      </button>
    </div>
  );
};

export default Filters;
