/* import React, { useContext } from 'react';
import useEvent from '../hooks/useEvent';
import StarWarsContext from '../context/StarWarsContext';
import useFilter from '../hooks/useFilter';
import Table from './Table';

function Form() {

  const { data, title, filter } = useContext(StarWarsContext);

  const zero = 0;
  const [{ values }, valueName, handlerNameChange,
    handlerNumberChange] = useEvent();

  const { collumn = '', condition = '', number = zero } = values;

  const [filtered, titles, handlerClick] = useFilter(
    data, title, collumn, condition, number, valueName, filter,
  );

  return (
    <div className="App">
      <div>
        <div className="input-filtrar">
          Filtrar por nomes:
          <input
            type="text"
            name="name"
            data-testid="name-filter"
            onChange={ handlerNameChange }
          />
        </div>
        <div className="select-filter">
          <select
            name="collumn"
            data-testid="column-filter"
            onChange={ handlerNumberChange }
          >
            <option>Selecione</option>
            <option value="population">population</option>
            <option value="orbital_period">orbital_period</option>
            <option value="diameter">diameter</option>
            <option value="rotation_period">rotation_period</option>
            <option value="surface_water">surface_water</option>
          </select>
          <br />
          <br />
          <select
            name="condition"
            data-testid="comparison-filter"
            onChange={ handlerNumberChange }
          >
            <option>Selecione</option>
            <option value=">">maior que</option>
            <option value="<">menor que</option>
            <option value="===">igual a</option>
          </select>
        </div>
        <div>
          <input
            type="number"
            name="number"
            data-testid="value-filter"
            onChange={ handlerNumberChange }
          />
        </div>
        <br />
        <div>
          <button
            type="button"
            data-testid="button-filter"
            onClick={ handlerClick }
          >
            Filtrar
          </button>
        </div>
      </div>
      <br />
      <br />
      <Table filter={ filtered } title={ titles } />
    </div>
  );
}

export default Form;
 */
