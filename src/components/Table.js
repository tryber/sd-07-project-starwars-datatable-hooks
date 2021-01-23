import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Table() {
  const { data, filters } = useContext(StarWarsContext);
  const { filterByName, filterByNumericValues } = filters;

  const tableLinesFunction = (planet) => {
    const { name, climate, created, edited, diameter,
      films, gravity, population, terrain, url } = planet;
    const {
      orbital_period: orbitalPeriod,
      rotation_period: rotationPeriod,
      surface_water: surfaceWater,
    } = planet;
    return (
      <tr key={ name }>
        <td>{ name }</td>
        <td>{ climate }</td>
        <td>{ created }</td>
        <td>{ diameter }</td>
        <td>{ edited }</td>
        <td>{ films }</td>
        <td>{ gravity }</td>
        <td>{ orbitalPeriod }</td>
        <td>{ population }</td>
        <td>{ rotationPeriod }</td>
        <td>{ surfaceWater }</td>
        <td>{ terrain }</td>
        <td>{ url }</td>
      </tr>
    );
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Clima</th>
          <th>Data de Criação</th>
          <th>Diâmetro</th>
          <th>Editado</th>
          <th>Filmes</th>
          <th>Gravidade</th>
          <th>Período Orbital</th>
          <th>População</th>
          <th>Período de Rotação</th>
          <th>Água da Superfície</th>
          <th>Terreno</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((planet) => {
            const { name } = filterByName;
            const zero = 0;
            if (filterByNumericValues.length > zero) {
              return filterByNumericValues.map((numericFilter) => {
                const { column, comparison, value } = numericFilter;
                if (comparison === 'maior que'
                  && parseInt(planet[column], 10)
                  > parseInt(value, 10)) {
                  tableLinesFunction(planet);
                  return (tableLinesFunction(planet));
                }
                if (comparison === 'menor que'
                  && parseInt(planet[column], 10)
                  < parseInt(value, 10)) {
                  return (tableLinesFunction(planet));
                }
                if (comparison === 'igual a'
                  && parseInt(planet[column], 10) === parseInt(value, 10)) {
                  return (tableLinesFunction(planet));
                }
                return undefined;
              });
            }
            if (planet.name.includes(name) && name !== '') {
              return (
                tableLinesFunction(planet)
              );
            }
            if (name === '' && filterByNumericValues.length === zero) {
              return (
                tableLinesFunction(planet)
              );
            }
            return undefined;
          })
        }
      </tbody>
    </table>
  );
}

export default Table;
