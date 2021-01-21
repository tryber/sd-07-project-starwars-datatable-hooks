import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const
    { data,
      setData,
      isFetching,
      getPlanetsAPI,
      filters: { filterByName: { name } },
      filters: { filterByNumericValues },
    } = useContext(StarWarsContext);

  useEffect(() => {
    getPlanetsAPI();
  }, []);

  const filterPlanetsBynumbers = () => {
    let planetFilter = data;
    console.log(planetFilter);
    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;
      switch (comparison) {
      case 'maior que':
        planetFilter = planetFilter
          .filter((planet) => Number(planet[column]) > Number(value));
        break;
      case 'menor que':
        planetFilter = planetFilter
          .filter((planet) => Number(planet[column]) < Number(value));
        break;
      case 'igual a':
        planetFilter = planetFilter
          .filter((planet) => Number(planet[column]) === Number(value));
        break;
      default: return planetFilter;
      }
    });
    console.log(planetFilter);
    return planetFilter;
  };

  useEffect(() => {
    setData(filterPlanetsBynumbers());
  }, [filterByNumericValues]);

  if (isFetching) return 'Carregando...';
  return (
    <div>
      <h1>Tabela de Planetas</h1>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Período de Rotação</th>
            <th>Período orbital</th>
            <th>Diâmetro</th>
            <th>Clima</th>
            <th>Gravidade</th>
            <th>Terreno</th>
            <th>Água na superfície</th>
            <th>População</th>
            <th>Filmes</th>
            <th>Criação</th>
            <th>Edição</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((planet, i) => (
            <tr key={ i }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films.toString()}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
            .filter(({ props }) => (props.children[0].props.children).includes(name))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
