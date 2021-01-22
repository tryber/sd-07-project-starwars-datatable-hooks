import React, { useContext, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

const SearchNumeric = () => {
  const [numbers, setNumbers] = useState({
    column: '',
    comparison: '',
    value: '',
  });

  const optionsColumn = ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];

  const { dispatch } = useContext(StarWarsContext);
  const {
    state: {
      filters: { filterByNumericValues: numericFilter },
    },
  } = useContext(StarWarsContext);

  const modifyNumbers = ({ target }) => {
    const { value, name } = target;
    setNumbers({ ...numbers, [name]: value });
  };

  const dispatchToContext = ({ column, comparison, value }) => {
    dispatch({ type: 'ADD_FILTER', newFilter: { column, comparison, value } });
  };

  return (
    <>
      <select
        name="column"
        id="column-filter"
        data-testid="column-filter"
        onChange={ modifyNumbers }
      >
        {optionsColumn.map((opt) => {
          if (!numericFilter.some((filter) => filter.column === opt)) {
            return (<option key={ opt } value={ opt }>{opt}</option>);
          }
          return null;
        })}

        {/* <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option> */}
      </select>

      <select
        name="comparison"
        id="comparison-filter"
        data-testid="comparison-filter"
        onChange={ modifyNumbers }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        name="value"
        value={ numbers.value }
        data-testid="value-filter"
        onChange={ modifyNumbers }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => dispatchToContext(numbers) }
      >
        Adiciona Filtro
      </button>
    </>
  );
};

export default SearchNumeric;
