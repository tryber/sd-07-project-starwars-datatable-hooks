import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function NumbersFilter() {
  const zero = 0;
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState(zero);

  const { filterByNumericValues, optionsColumn, optionsComparison,
    setOptionsColumn } = useContext(StarWarsContext);

  const handleClick = async () => {
    await filterByNumericValues({ column, comparison, value });
    setOptionsColumn(optionsColumn.filter((option) => option !== column));
  };

  return (
    <form>
      <select
        name="column"
        data-testid="column-filter"
        onChange={ (event) => setColumn(event.target.value) }
      >
        {optionsColumn.map(
          (option) => <option key={ option } value={ option }>{option}</option>,
        )}
      </select>
      <select
        name="comparison"
        data-testid="comparison-filter"
        onChange={ (event) => setComparison(event.target.value) }
      >
        {optionsComparison.map(
          (option) => <option key={ option } value={ option }>{option}</option>,
        )}
      </select>
      <input
        name="value"
        type="number"
        onChange={ (event) => setValue(event.target.value) }
        data-testid="value-filter"
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Adicionar Filtro
      </button>
    </form>
  );
}

export default NumbersFilter;
