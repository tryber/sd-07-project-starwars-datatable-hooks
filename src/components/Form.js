import React, { useContext, useState } from 'react';
import SWContext from '../context/Context';

export default function Form() {
  const {
    filters: {
      filterByName: { name },
      filterByNumericValues: { populationType },
    },
    setByName,
    setByNum,
  } = useContext(SWContext);
  const TYPES = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const [type, setType] = useState('');
  const [comparison, setComparison] = useState('maior que');
  const INITIAL_VALUE = 0;
  const [value, setValue] = useState(INITIAL_VALUE);
  const handleChange = ({ target }) => setByName(target.value);

  const handleClick = (e) => {
    e.preventDefault();
    console.log(type, comparison, value);
    setByNum({
      populationType: type,
      logic: comparison,
      number: parseInt(value, 10),
    });
  };
  return (
    <div>
      <input
        type="text"
        onChange={ handleChange }
        value={ name }
        data-testid="name-filter"
      />
      <form>
        <select
          data-testid="column-filter"
          onChange={ (e) => setType(e.target.value) }
          value={ type }
        >
          {(TYPES.filter((typ) => typ !== populationType)).map((typ) => (
            <option key={ typ } value={ typ }>
              {typ}
            </option>
          ))}
        </select>
        <select
          data-testid="comparison-filter"
          onChange={ (e) => setComparison(e.target.value) }
          value={ comparison }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>
        <input
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setValue(e.target.value) }
          value={ value }
        />
        <button type="submit" data-testid="button-filter" onClick={ handleClick }>
          acionar
        </button>
      </form>
    </div>
  );
}
