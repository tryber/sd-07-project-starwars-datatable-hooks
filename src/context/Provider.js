import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchPlanets from '../services/fetchPlanetsAPI';

function Provider(props) {
  const [data, setData] = useState([{ teste: 'só testando' }]);
  const [filters, setFilters] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  useEffect(() => {
    fetchPlanets().then((response) => setData(response.results));
  }, []);

  const context = {
    data,
    filters,
    setFilters,
  };
  const { children } = props;
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
