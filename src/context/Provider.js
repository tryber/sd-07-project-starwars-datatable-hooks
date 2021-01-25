import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planets from '../services/issApi';

// ALexandre Faustino codigo

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await planets();
      setData(response);
    }
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ data }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
