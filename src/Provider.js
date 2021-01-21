import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context/StarWarsContext';
import planetsApi from './services/planetsApi';

const { Provider } = StarWarsContext;
export default function StarWarsProvider({ children }) {
  const [data, setData] = useState({});
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '',
      }
    ]
  });

  const fetchPlanets = async () => {
    const planets = await planetsApi();
    setData(planets);
  };

  const handleChange = (name) => {
    setFilter({
      ...filter,
      filterByName: {
        name,
      },
    });
  };

  const handleNumericValues = (name, value) => {
    setFilter({
      ...filter,
      filterByNumericValues: [
        {
          ...filter.filterByNumericValues[0],
          [name]: value,
        }
      ]
    })
  }

  useEffect(() => {
    fetchPlanets();
  }, []);

  useEffect(() => {
    const { filterByName: { name } } = filter;

    if (name !== '') {
      const filteredData = data.filter((planet) => planet.name.includes(name));
      setData(filteredData);
    } else {
      fetchPlanets();
    }
  }, [filter]);

  const context = {
    data,
    handleChange,
    handleNumericValues,
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
