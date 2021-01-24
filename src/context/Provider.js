import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import Services from '../services/PlanetService';

function Provider({ children }) {
  const isEmpty = 0;
  const [planets, setPlanets] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterByName, setFilterByName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [number, setNumber] = useState(isEmpty);
  const [filterByNumericArray, setFilterByNumericArray] = useState([]);
  const [options, setOptions] = useState(
    ['population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'],
  );

  const onFetchPlanets = async () => {
    const planetsRes = await Services.fetchPlanets();
    setPlanets(planetsRes.results);
  };

  const filterPlanetByName = (text) => {
    const filteredPlanets = planets.filter((planet) => planet.name.includes(text));
    if (text === '') {
      setFiltered(planets);
    } else {
      setFiltered(filteredPlanets);
    }
  };

  const clearFilter = () => {
    setFiltered(planets);
  };

  const handleFilterByNumericValues = () => {
    if (column === 'population') {
      setOptions(
        options.filter((option) => option !== 'population'),
      );
    }
    setFilterByNumericArray(
      [...filterByNumericArray, { column, comparison, value: number }],
    );

    const filterByNumeric = planets.filter((planet) => {
      if (comparison === 'maior que') {
        return parseInt(planet[column], 10) > number;
      } if (comparison === 'menor que') {
        return parseInt(planet[column], 10) < number;
      }
      return parseInt(planet[column], 10) === number;
    });
    setFiltered(filterByNumeric);
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
    case 'filter_name':
      setFilterByName(value);
      filterPlanetByName(value);
      break;
    case 'column':
      setColumn(value);
      break;
    case 'comparison':
      setComparison(value);
      break;
    case 'value':
      setNumber(parseInt(value, 10));
      break;
    default:
    }
  };

  useEffect(() => {
    onFetchPlanets();
  }, []);

  const contextValue = {
    options,
    data: planets,
    column,
    comparison,
    value: number,
    filtered: filtered.length === isEmpty ? planets : filtered,
    filters: {
      filterByName: {
        name: filterByName,
      },
      filterByNumericValues: filterByNumericArray,
    },
    functions: {
      onHandleChange,
      handleFilterByNumericValues,
      clearFilter,
    },
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Provider;
