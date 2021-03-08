import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function NumberFilter() {
  const context = useContext(StarWarsContext);
  const { numericValuesFiltered, setnumericValuesFiltered } = context;

  const [column, setColumn] = useState(
    'population',
  );
  const [numericColumns] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
  const [comparison, setComparison] = useState('maior que');
  const zero = 0;
  const [number, setNumber] = useState(zero);
  const handleChangeColumn = ({ target }) => {
    const { value } = target;
    setColumn(value);
  };
  const handleChangeComparison = ({ target }) => {
    const { value } = target;
    setComparison(value);
  };
  const handleChangeNumber = ({ target }) => {
    const { value } = target;
    const numberComparison = Number(value);
    setNumber(numberComparison);
  };

  const filter = () => {
    setnumericValuesFiltered([
      ...numericValuesFiltered,
      {
        column,
        comparison,
        value: number,
      },
    ]);
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleChangeColumn }
        value={ column }
      >
        {
          numericColumns
            .filter((col) => !numericValuesFiltered
              .some((nFilter) => (nFilter.column === col)))
            .map((col) => (
              <option key={ col } value={ col }>{ col }</option>
            ))
        }

      </select>

      <select
        data-testid="comparison-filter"
        onChange={ handleChangeComparison }
        value={ comparison }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        value={ number }
        onChange={ handleChangeNumber }
      />
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default NumberFilter;
