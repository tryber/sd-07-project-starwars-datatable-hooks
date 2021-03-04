import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const {
    planets,
    planetsFilters,
    filters,
    setFilters,
  } = useContext(StarWarsContext);

  useEffect(() => {
    console.log('mudei');
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
      <select
        data-testid='column-filter'
        name="column"
      >
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid='comparison-filter'
        name="range"
      >
        <option>maior que</option>
        <option>menor que</option>
        <option>igual a</option>
      </select>
      <input 
        type="number"
        data-testid='value-filter'
      />
      <button 
        type="button"
        data-testid='button-filter'
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
