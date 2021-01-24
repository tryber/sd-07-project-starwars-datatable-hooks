import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';
import Button from '../Button';

function FilterBar() {
  const {
    data,
    filters,
    filters: { filterByName: { name } },
    filters: { filterByNumericValues },
    columnArray,
    setFilters,
    setData,
    setColumnArray,
  } = useContext(StarWarsContext);

  const [filteredValues, setValues] = useState(
    { column: 'population',
      comparison: 'maior que',
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
      { ...filters, filterByNumericValues: [...filterByNumericValues, filteredValues] },
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

  const removeColumnOption = () => {
    const newColumnArray = [...columnArray.filter((e) => e !== column)];
    setColumnArray(newColumnArray);
  };

  const resetValues = () => {
    const resetedValues = { column: 'population', comparison: 'maior que', value: 0 };
    setValues(resetedValues);
  };

  return (
    <div>
      <label htmlFor="name">
        Nome do Planeta:
        <input
          type="text"
          name="name"
          value={ name }
          data-testid="name-filter"
          onChange={ onChangeHandleValues }
        />
      </label>
      <label htmlFor="column" data-testid="filter">
        <select
          name="column"
          value={ column }
          data-testid="column-filter"
          onChange={ onChangeHandleValues }
        >
          {/* <option value="">Coluna</option> */}
          { columnArray.map((e) => <option key={ e } value={ e }>{e}</option>) }
        </select>
        <Button />
      </label>
      <label htmlFor="comparison" data-testid="filter">
        <select
          name="comparison"
          value={ comparison }
          data-testid="comparison-filter"
          onChange={ onChangeHandleValues }
        >
          {/* <option value="">Comparação</option> */}
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <Button />
      </label>
      <label htmlFor="value" data-testid="filter">
        <input
          name="value"
          min="0"
          type="number"
          value={ value }
          data-testid="value-filter"
          onChange={ onChangeHandleValues }
        />
        <Button />
      </label>
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          handleClick();
          removeColumnOption();
          resetValues();
        } }
      >
        Filtrar
      </button>
    </div>
  );
}

export default FilterBar;
