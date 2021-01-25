import React from 'react';
import useEvent from '../hooks/useEvent';

function Table() {
  const [filtered, titles, option, names, filterByNumericValues,
    handlerNameChange, handlerNumberChange, handlerClick, removeFilter] = useEvent();

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
            {/* <option>Selecione</option> */}
            {option.map((op, index) => (
              <option key={ index } value={ op }>{ op }</option>
            ))}
          </select>
          <br />
          <br />
          <select
            name="condition"
            data-testid="comparison-filter"
            onChange={ handlerNumberChange }
          >
            {/* <option>Selecione</option> */}
            <option value="maior que">maior que</option>
            <option value="menor que">menor que</option>
            <option value="igual a">igual a</option>
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
          <br />
          {filterByNumericValues.map(({ collumn, condition, number }, index) => (
            <div key={ index } data-testid="filter">
              <span>
                { collumn }
              </span>
              {' '}
              <span>
                { condition }
              </span>
              {' '}
              <span>
                { number }
              </span>
              {' '}
              <button
                type="button"
                data-testid="filter"
                onClick={ removeFilter }
                value={ collumn }
              >
                X
              </button>
            </div>
          ))}
        </div>
        <br />
        <button
          type="button"
          data-testid="button-filter"
          onClick={ handlerClick }
        >
          Filtrar
        </button>
      </div>
      <br />
      <br />
      <table>
        <thead>
          <tr>
            {
              titles.map((tit, index) => (
                <th key={ index }>{ tit }</th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            filtered.filter((fil) => fil.name.includes(names)).map((planet, index) => (
              <tr key={ index }>
                <td data-testid="planet-name">{ planet.name }</td>
                <td>{planet.rotation_period}</td>
                <td>{ planet.orbital_period }</td>
                <td>{ planet.diameter }</td>
                <td>{ planet.climate }</td>
                <td>{ planet.gravity }</td>
                <td>{ planet.terrain }</td>
                <td>{ planet.surface_water }</td>
                <td>{ planet.population }</td>
                <td>
                  <a rel={ planet.films } href={ planet.films }>
                    {planet.films}
                  </a>
                </td>
                <td>{ planet.created }</td>
                <td>{ planet.edited }</td>
                <td>
                  <a rel={ planet.url } href={ planet.url }>
                    {planet.url}
                  </a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
