import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../../context/StarWarsContext';
import TableLine from './TableLine';

const Tabela = () => {
  const { planets, filters } = useContext(StarWarsContext);
  const zero = 0;
  const one = 1;
  const negOne = -1;

  const biggerThen = (planerColumn, number) => (
    parseInt(planerColumn, 10) > parseInt(number, 10));

  const lessThen = (planerColumn, number) => (
    parseInt(planerColumn, 10) < parseInt(number, 10));

  const equalTo = (planerColumn, number) => (
    parseInt(planerColumn, 10) === parseInt(number, 10));

  const getComparisons = (planet, column, comparison, value) => {
    const comparisons = {
      'maior que': biggerThen(planet[column], value),
      'menor que': lessThen(planet[column], value),
      'igual a': equalTo(planet[column], value),
    };
    return comparisons[comparison];
  };

  const filterPlanetsByNumericValues = (planetsSorts) => {
    const { filterByNumericValues } = filters;

    if (filterByNumericValues.length === zero) {
      return planetsSorts;
    }

    return planetsSorts.filter((planet) => (
      filterByNumericValues.every((filter) => (
        getComparisons(planet, filter.column, filter.comparison, filter.value, filter)
      ))));
  };

  const sortPlanets = (_planets) => {
    const arrayColumns = [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ];
    if (arrayColumns.includes(filters.order.column)) {
      _planets.sort((b, a) => {
        if (parseInt(a[filters.order.column], 10)
         < parseInt(b[filters.order.column], 10)) {
          return filters.order.sort === 'ASC' ? one : negOne;
        }
        if (parseInt(a[filters.order.column], 10)
         > parseInt(b[filters.order.column], 10)) {
          return filters.order.sort === 'ASC' ? negOne : one;
        }
        return zero;
      });
    } else {
      _planets.sort((b, a) => {
        if (a[filters.order.column] < b[filters.order.column]) {
          return filters.order.sort === 'ASC' ? one : negOne;
        }
        if (a[filters.order.column] > b[filters.order.column]) {
          return filters.order.sort === 'ASC' ? negOne : one;
        }
        return zero;
      });
    }
    return _planets;
  };

  const filterPlanets = () => {
    const planetsByNumericValue = filterPlanetsByNumericValues(planets);
    const sortedPlanets = sortPlanets(planetsByNumericValue);
    return sortedPlanets;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Dia</th>
          <th>Ano</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Agua na Superfície</th>
          <th>População</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>Filmes</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filterPlanets()
          .filter((planet) => planet.name.toLowerCase()
            .includes(filters.filterByName.name.toLowerCase()))
          .map((planet) => (

            <TableLine planet={ planet } key={ planet.name } />
          ))}
      </tbody>
    </table>
  );
};

Tabela.propTypes = {
  planets: PropTypes.instanceOf(Array),
}.isRequired;

export default Tabela;
