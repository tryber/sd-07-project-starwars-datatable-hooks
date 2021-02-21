import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/API';
import StarWarsContext from './StarWarsContext';

function GetPlanets({ children }) {
  const zero = 0;

  const [response, setResponse] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(zero);
  const [planetsArray, setPlanets] = useState([]);
  const [keysFiltered, setKeysFiltered] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {},
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
  });

  useEffect(() => {
    async function res() {
      const planets = await fetchPlanets();
      setResponse([...planets]);
      setPlanets([...planets]);
      const planetsKeys = Object.keys(planets[0]);
      setKeysFiltered(planetsKeys.filter((element) => element !== 'residents'));
    }
    res();
  }, []);

  useEffect(() => {
    const { filterByName, filterByNumericValues, order } = filters;
    let newArray = [...response];
    if (filterByName.name) {
      const { name: nome } = filterByName;
      newArray = newArray.filter(({ name: planetName }) => planetName.includes(nome));
    }

    if (filterByNumericValues.length !== zero) {
      filterByNumericValues.forEach((element) => {
        const { column: coluna, comparison: comp, value: valor } = element;
        if (comp === 'maior que') {
          newArray = newArray.filter(
            (planet) => parseFloat(planet[coluna]) > parseFloat(valor),
          );
        }
        if (comp === 'menor que') {
          newArray = newArray.filter(
            (planet) => parseFloat(planet[coluna]) < parseFloat(valor),
          );
        }
        if (comp === 'igual a') {
          newArray = newArray.filter(
            (planet) => parseFloat(planet[coluna]) === parseFloat(valor),
          );
        }
      });
    }

    const ascNumber = (a, b) => a[order.column] - b[order.column];
    const dscNumber = (a, b) => b[order.column] - a[order.column];

    const sortASC = () => {
      if (
        order.column === 'orbital_period'
      || order.column === 'rotation_period'
      || order.column === 'diameter'
      || order.column === 'surface_water'
      || order.column === 'population') {
        newArray.sort(ascNumber);
      } else {
        newArray.sort((a, b) => {
          const one = 1;
          const negativeOne = -1;
          const newZero = 0;
          if (a[order.column] > b[order.column]) {
            return one;
          }
          if (a[order.column] < b[order.column]) {
            return negativeOne;
          }
          return newZero;
        });
      }
    };

    const sortDESC = () => {
      if (
        order.column === 'orbital_period'
      || order.column === 'rotation_period'
      || order.column === 'diameter'
      || order.column === 'surface_water'
      || order.column === 'population') {
        newArray.sort(dscNumber);
      } else {
        newArray.sort((a, b) => {
          const one = 1;
          const negativeOne = -1;
          const newZero = 0;
          if (a[order.column] > b[order.column]) {
            return negativeOne;
          }
          if (a[order.column] < b[order.column]) {
            return one;
          }
          return newZero;
        });
      }
    };

    if (order.sort === 'ASC') {
      sortASC();
    } else {
      sortDESC();
    }

    setPlanets(newArray);
  }, [filters, response]);

  const inputFilter = (inputName) => {
    setFilters({
      ...filters,
      filterByName: { name: inputName },
    });
  };

  const buttonFilter = () => {
    const newNumericFilter = {
      column,
      comparison,
      value,
    };
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        newNumericFilter,
      ],
    });
  };

  const state = {
    response,
    planetsArray,
    keysFiltered,
    filters,
    column,
    comparison,
    value,
    name,
    setPlanets,
    setName,
    setResponse,
    setColumn,
    setComparison,
    setFilters,
    setValue,
    inputFilter,
    buttonFilter,
    setKeysFiltered,
  };

  return (
    <StarWarsContext.Provider value={ state }>
      {children}
    </StarWarsContext.Provider>
  );
}

GetPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GetPlanets;
