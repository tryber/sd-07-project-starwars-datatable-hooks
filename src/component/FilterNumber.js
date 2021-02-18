import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function FilterNumber() {
  const context = useContext(StarWarsContext);
  const { setFilterByNumericValues } = context;

  const [column, setColumn] = useState([
    'population',
  ]);
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
    setFilterByNumericValues(
      {
        column,
        comparison,
        value: number,
      },
    );
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        onChange={ handleChangeColumn }
        value={ column }
      >
        <option key="index" value="population">population</option>
        <option key="orbital_period" value="orbital_period">orbital_period</option>
        <option key="diameter" value="diameter">diameter</option>
        <option key="rotation_period" value="rotation_period">rotation_period</option>
        <option key="surface_water" value="surface_water">surface_water</option>
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

export default FilterNumber;

// codigo feito com a ajuda de Erick vini
