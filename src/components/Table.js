import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets,
    planetsFilters,
    filters,
    setFilters,
  } = useContext(StarWarsContext);

  const [column, setColumn] = useState();
  const [range, setRange] = useState();
  const [values, setValue] = useState();

  useEffect(() => {
  }, [filters]);

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
        onChange={ ({ target }) => setColumn(target.value) }
        name="column"
      >
        {columnsForRender.map((columns, index) => (
          <option key={ index } value={ columns }>
            { columns }
          </option>
        ))}
      </select>
    );
  };

  const filterNumeric = () => {
    setFilters(
      { ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column,
            comparison: range,
            value: values,
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
        placeholder="Digite o nome do Planeta"
        onChange={ filterNamePlanets }
      />
      { options() }
      <select
        data-testid="comparison-filter"
        name="range"
        onChange={ ({ target }) => setRange(target.value) }
      >
        <option>Escolha uma medida</option>
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        placeholder="Digite o valor"
        onChange={ ({ target }) => setValue(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ filterNumeric }
      >
        Filtrar
      </button>
      <table>
        <thead>
          <tr>
            {Object.keys(planets[0]).map((item) => (
              <th key={ item }>{ item }</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {planetsFilters.map((planet) => (
            <tr key={ planet }>
              { Object.values(planet).map((data) => (
                <td key={ data }>
                  { data }
                </td>
              )) }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
