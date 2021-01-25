import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/API';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  const [arrayPlanets, setArrayPlanets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getPlanets();
      setData(response);
      setArrayPlanets(response);
    }
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider
      value={ { data,
        setData,
        arrayPlanets,
        setArrayPlanets,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
