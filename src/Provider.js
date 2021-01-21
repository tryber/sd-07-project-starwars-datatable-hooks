import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import getCurrencePlanets from './services/planetsApi';

function Provider({ children }) {
  const [filterName, setFilterByName] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    getCurrencePlanets()
      .then((response) => setData(response.results));
  }, []);

  const myContext = {
    data,
    setFilterByName,
    filters: {
      filterByName: {
        name: filterName,
      },
    },
  };

  return (
    <StarWarsContext.Provider value={ myContext }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
