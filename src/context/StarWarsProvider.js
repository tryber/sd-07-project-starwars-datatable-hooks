import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

/** Pesquisas realizadas para criação das funções de busca e de utilização do useEffect
 * FONTES: https://pt-br.reactjs.org/docs/faq-ajax.html
 *  https://medium.com/better-programming/how-to-fetch-data-from-an-api-with-react-hooks-9e7202b8afcd */

const initialStateFilter = {
  filterByName: { name: '' },
  filterByNumericValues: [],
  order: {
    column: 'name',
    sort: 'ASC',
  },
  filterNumeric: false,
};

const StarWarsProvider = ({ children }) => {
  const [data, setPlanets] = useState({});
  const [copyData, setCopyData] = useState({});
  const [filters, setFilters] = useState(initialStateFilter);
  const [planetsError, setPlanetsError] = useState(false);
  const [planetsLoaded, setPlanetsLoaded] = useState(false);
  const [tableHeader, setTableHeader] = useState([]);
  const aMenor = -1;
  const bMenor = 1;
  const bIgaul = 0;

  /** Função de ordenação baseada na fonte:
   *  https://pt.stackoverflow.com/questions/46600/como-ordenar-uma-array-de-objetos-com-array-sort */

  function ordinationNameAsc(a, b) {
    if (a.name < b.name) {
      return aMenor;
    }
    if (a.name > b.name) {
      return bMenor;
    }
    return bIgaul;
  }

  async function fetchData() {
    const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

    await fetch(endpoint)
      .then((response) => (
        response.json()
          .then((json) => {
            const { results } = json;
            if (response.ok) {
              results.map((item) => delete item.residents);
              results.sort(ordinationNameAsc);
              setPlanets(results);
              setCopyData(results);
              setTableHeader(Object.keys(results[0]));
            } else {
              setPlanetsError(results);
            }
            setPlanetsLoaded(true);
          })
      ));
  }

  useEffect(() => {
    fetchData();
  }, []);

  function applyFilters(column, comparison, value) {
    setFilters({
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        { column, comparison, value }],
      filterNumeric: true });
    let newData;
    if (comparison === 'maior que') {
      newData = copyData
        .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
    } else if (comparison === 'menor que') {
      newData = copyData
        .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
    } else {
      newData = copyData.filter(
        (planet) => parseInt(planet[column], 10) === parseInt(value, 10),
      );
    }
    setCopyData(newData);
  }

  function reapplyFilters() {
    const { filterByNumericValues } = filters;
    console.log(filterByNumericValues);
    let newData;

    filterByNumericValues.forEach(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        newData = copyData
          .filter((planet) => parseInt(planet[column], 10) > parseInt(value, 10));
      } else if (comparison === 'menor que') {
        newData = copyData
          .filter((planet) => parseInt(planet[column], 10) < parseInt(value, 10));
      } else {
        newData = copyData.filter(
          (planet) => parseInt(planet[column], 10) === parseInt(value, 10),
        );
      }
    });

    if (newData) setCopyData(newData);
  }

  function ordinationNameDesc(a, b) {
    if (a.name > b.name) {
      return aMenor;
    }
    if (a.name < b.name) {
      return bMenor;
    }
    return bIgaul;
  }

  function ordinationColumn(sort, col) {
    switch (col) {
    case 'orbital_period':
      if (sort === 'DESC') {
        copyData.sort((a, b) => b.orbital_period - a.orbital_period);
      } else {
        copyData.sort((a, b) => a.orbital_period - b.orbital_period);
      }
      break;
    case 'population':
      if (sort === 'DESC') {
        copyData.sort((a, b) => b.population - a.population);
      } else {
        copyData.sort((a, b) => a.population - b.population);
      }
      break;
    case 'name':
      if (sort === 'DESC') {
        copyData.sort(ordinationNameDesc);
      } else {
        copyData.sort(ordinationNameAsc);
      }
      break;
    default:
    }
    setCopyData(copyData);
  }

  const context = {
    data,
    setPlanets,
    copyData,
    setCopyData,
    planetsError,
    planetsLoaded,
    fetchData,
    filters,
    setFilters,
    applyFilters,
    reapplyFilters,
    tableHeader,
    ordinationColumn };

  return (
    <StarWarsContext.Provider value={ context }>
      { children }
    </StarWarsContext.Provider>
  );
};

export { StarWarsContext as Context, StarWarsProvider as Provider };

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
