import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsApi from '../services/api';

const { Provider } = StarWarsContext;
export default function StarWarsProvider({ children }) {
  const [data, setData] = useState();
  const [filteredPlanets, setFilteredPlanets] = useState();
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);

  const fetchPlanets = async () => {
    const planets = await planetsApi();
    setData(planets);
    setFilteredPlanets(planets);
  };

  const filterNameOnchange = (name) => {
    if (data && name !== '') {
      const filteredData = data.filter((planet) => planet.name.includes(name));
      setFilteredPlanets(filteredData);
    } else {
      setFilteredPlanets(data);
    }
  };

  const filterPlanets = () => {
    if (!data) return;
    setFilteredPlanets(data);

    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;

      if (comparison === 'maior que') {
        setFilteredPlanets(
          (prevPlanets) => prevPlanets.filter((planet) => +value < +planet[column]),
        );
      } else if (comparison === 'menor que') {
        setFilteredPlanets(
          (prevPlanets) => prevPlanets.filter((planet) => +value > +planet[column]),
        );
      } else {
        setFilteredPlanets(
          (prevPlanets) => prevPlanets.filter((planet) => +value === +planet[column]),
        );
      }
    });
  };

  const removeFilter = (column) => {
    setFilterByNumericValues(
      filterByNumericValues.filter((filter) => filter.column !== column),
    );
  };

  useEffect(() => {
    filterPlanets();
  }, [filterByNumericValues]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    filteredPlanets,
    filterByNumericValues,
    removeFilter,
    filterNameOnchange,
    setFilterByNumericValues,
  };

  return (
    <Provider value={ context }>
      { children }
    </Provider>
  );
}
StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
