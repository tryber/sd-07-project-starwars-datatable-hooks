import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanetsApi from '../services/api';

const { Provider } = StarWarsContext;
function StarWarsProvider({ children }) {
  const [data, setData] = useState({});
  const [filter, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumber: [
      {
        column: 'diameter',
        comparation: 'menor que',
        value: '',
      },
    ],
  });

  const fetchPlanets = async () => {
    const planets = await getPlanetsApi();
    setData(planets);
  };

  const handleNumericFilter = (name, value) => {
    setFilter({
      ...filter,
      filterByNumber: [
        {
          ...filter.filterByNumber[0],
          [name]: value,
        },
      ],
    });
  };

  const handleFilterButton = () => {
    const { column, comparation, value } = filter.filterByNumber[0];

    if (comparation === 'maior que') {
      const filteredPlanets = data.filter((planet) => +value < +planet[column]);
      setData(filteredPlanets);
    } else if (comparation === 'menor que') {
      const filteredPlanets = data.filter((planet) => +value > +planet[column]);
      setData(filteredPlanets);
    } else {
      const filteredPlanets = data.filter((planet) => +value === +planet[column]);
      setData(filteredPlanets);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const handleChange = (name) => {
    setFilter({
      ...filter,
      filterByName: {
        name,
      },
    });
  };

  useEffect(() => {
    const { filterByName: { name } } = filter;

    if (name !== '') {
      const filteredData = data.filter((planet) => planet.name.includes(name));
      setData(filteredData);
    } else {
      fetchPlanets();
    }
  }, [filter]);

  const context = { // Just the states and functions listed here will be used by the children
    data, // Iformation used in the component Table
    handleChange, // Function used in the component Filters
    handleNumericFilter, // Function used in the component Filters
    handleFilterButton,
  };

  return (
    <Provider value={ context }>
      {children}
    </Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default StarWarsProvider;
