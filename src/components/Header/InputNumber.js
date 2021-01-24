import React, { useState, useContext } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function InputNumber() {
  const optionsArray = ['population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'];
  const optionsObject = {
    column: 'population',
    comparison: 'maior que',
    value: 0,
  };
  const [columns, setColumns] = useState(optionsArray);
  const [columnsValue, setOptionsValue] = useState(optionsObject);

  const { handleFilterNumericValues } = useContext(StarWarsContext);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setOptionsValue(({ ...columnsValue, [name]: value }));
  };

  return (
    <div>
      <select
        name="column"
        defaultValue="population"
        data-testid="column-filter"
        onChange={ handleChange }
      >
        {columns.map((column, index) => (
          <option key={ index } value={ column }>{column}</option>
        ))}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ handleChange }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        name="value"
        type="number"
        data-testid="value-filter"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => {
          handleFilterNumericValues(columnsValue);
          setColumns(columns.filter((column) => column !== columnsValue.column));
        } }
      >
        Filter
      </button>
    </div>
  );
}

export default InputNumber;
