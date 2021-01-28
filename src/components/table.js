import React, { useContext, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets,
    setFilters,
    filters,
    listPlanetsFilters,
  } = useContext(StarWarsContext);
  const [coluna, setColuna] = useState();
  const [comparativo, setComparativo] = useState();
  const [valor, setValor] = useState();

  const options = () => {
    const { filterByNumericValues } = filters;
    const newFilters = [];
    filterByNumericValues.map((filter) => newFilters.push(filter.column));
    const columnsAll = [
      'diameter',
      'orbital_period',
      'population',
      'rotation_period',
      'surface_water',
    ];
    const columnsForRender = columnsAll.filter((compar) => (
      newFilters.every((item) => item !== compar)
    ));
    return (
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => setColuna(target.value) }
        name="coluna"
      >
        {columnsForRender.map((i, index) => (
          <option key={ index } value={ i }>
            { i }
          </option>
        ))}
      </select>
    );
  };

  const filterNamePlanets = ({ target }) => {
    const { value } = target;
    setFilters(
      { ...filters,
        filterByName: {
          name: value,
        },
      },
    );
  };

  const filterNumeric = () => {
    setFilters(
      { ...filters,
        filterByNumericValues: [
          {
            column: coluna,
            comparison: comparativo,
            value: valor,
          },
        ],
      },
    );
  };
  const zero = 0;
  if (planets.length === zero) return (<h1>Carregando...</h1>);
  return (
    <div>
      <input
        data-testid="name-filter"
        type="text"
        placeholder="digite o nome do planeta"
        name="name"
        onChange={ filterNamePlanets }
      />
      { options() }
      <select
        data-testid="comparison-filter"
        name="comparativo"
        onChange={ ({ target }) => setComparativo(target.value) }
      >
        <option>escolha seu comparativo</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        data-testid="value-filter"
        type="number"
        name="resultado"
        onChange={ ({ target }) => setValor(target.value) }
      />
      <button
        onClick={ filterNumeric }
        data-testid="button-filter"
        type="button"
      >
        Filtrar
      </button>
      <table>
        <thead>
          <tr>
            {Object.keys(planets[0]).map((item) => (
              <th className="table-head" key={ item }>
                { item }
              </th>))}
          </tr>
        </thead>
        <tbody>
          {listPlanetsFilters.map((objectPlanets) => (
            <tr key="planetas">
              { Object.values(objectPlanets).map((chaves) => (
                <td
                  key={ chaves }
                >
                  { chaves }
                </td>)) }
            </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
