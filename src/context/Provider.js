import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../API';

function Provider({ children }) {
  const INITIAL_STATE = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: '',
      sort: '',
    },
  };

  const [planets, setPlanets] = useState([]);
  const [filters, setFilter] = useState(INITIAL_STATE);

  useEffect(() => {
    fetchAPI().then((data) => (setPlanets(data.results)));
  }, []);

  const handleFilterName = ({ target }) => {
    setFilter(({ ...filters, filterByName: { name: target.value } }));
    console.log(filters);
  };
  const context = {
    planets,
    filters,
    handleFilterName,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
