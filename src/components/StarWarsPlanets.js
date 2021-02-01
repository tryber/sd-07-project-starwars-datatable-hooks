import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';
import StarWarsAPI from '../services/starWarsAPI';

function StarWarsPlanets({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchPlanets = async () => {
      const requestPlanets = await StarWarsAPI();
      setData(requestPlanets);
    };
    fetchPlanets();
  }, []);

  const contextValue = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsPlanets;
