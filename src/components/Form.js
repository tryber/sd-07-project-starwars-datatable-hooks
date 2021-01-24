import React, { useContext, useState } from 'react';
import SWContext from '../context/Context';
import OrderForm from './OrderForm';

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

  const handleClick = (e = null) => {
    if (e !== null) {
      e.preventDefault();
    }
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
        <div data-testid="filter">
          <select
            data-testid="column-filter"
            onChange={ (e) => setType(e.target.value) }
            value={ type }
          >
            {TYPES.filter((typ) => typ !== populationType).map((typ) => (
              <option key={ typ } value={ typ }>
                {typ}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={ () => {
              // setType('');
              setByNum({
                populationType: '',
                logic: comparison,
                number: parseInt(value, 10),
              });
            } }
          >
            x
          </button>
        </div>

        <div data-testid="filter">
          <select
            data-testid="comparison-filter"
            onChange={ (e) => setComparison(e.target.value) }
            value={ comparison }
          >
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
          </select>
          <button
            type="button"
            onClick={ () => {
              // setComparison('');
              setByNum({
                populationType: type,
                logic: '',
                number: parseInt(value, 10),
              });
            } }
          >
            x
          </button>
        </div>

        <input
          type="number"
          data-testid="value-filter"
          onChange={ (e) => setValue(e.target.value) }
          value={ value }
        />

        <button type="submit" data-testid="button-filter" onClick={ handleClick }>
          acionar
        </button>
        <OrderForm types={ [...TYPES, 'name', 'climate', 'terrain', 'films'] } />
      </form>
    </div>
  );
}
