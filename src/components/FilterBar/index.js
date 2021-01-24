import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function FilterBar() {
  const {
    data,
    filters,
    filters: { filterByName: { name } },
    setFilters,
    setData,
  } = useContext(StarWarsContext);

  const [filteredValues, setValues] = useState(
    { column: '',
      comparison: '',
      value: 0,
    },
  );

  const onChangeHandleValues = ({ target }) => {
    const { value, name: selectedName } = target;

    switch (selectedName) {
    case 'name':
      setFilters({ ...filters, filterByName: { name: value } });
      break;
    case 'column':
      setValues({ ...filteredValues, column: value });
      break;
    case 'comparison':
      setValues({ ...filteredValues, comparison: value });
      break;
    case 'value':
      setValues({ ...filteredValues, value });
      break;
    default:
      return '';
    }
  };

  const handleClick = () => {
    setFilters(
      { ...filters, filterByNumericValues: [filteredValues] },
    );

    let filterArray = data;

    const { column, comparison, value } = filteredValues;
    switch (comparison) {
    case 'maior que':
      filterArray = [...data.filter((planet) => Number(planet[column]) > Number(value))];
      setData([...filterArray]);
      break;
    case 'menor que':
      filterArray = [...data.filter((planet) => Number(planet[column]) < Number(value))];
      setData([...filterArray]);
      break;
    case 'igual a':
      filterArray = [...data.filter(
        (planet) => Number(planet[column]) === Number(value),
      )];
      setData([...filterArray]);
      break;
    default:
      return filterArray;
    }
  };

  const { column, comparison, value } = filteredValues;
  return (
    <div>
      <input
        type="text"
        name="name"
        value={ name }
        data-testid="name-filter"
        onChange={ onChangeHandleValues }
      />
      <select
        name="column"
        value={ column }
        data-testid="column-filter"
        onChange={ onChangeHandleValues }
      >
        <option value="">Coluna</option>
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>
      <select
        name="comparison"
        value={ comparison }
        data-testid="comparison-filter"
        onChange={ onChangeHandleValues }
      >
        <option value="">Comparação</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        min="0"
        type="number"
        value={ value }
        data-testid="value-filter"
        onChange={ onChangeHandleValues }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterBar;
