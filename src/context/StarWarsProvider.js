import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import fetchPlanets from '../services/api';
import StarWarsContext from './StarWarsContext';

function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchPlanets()
      .then((item) => {
        setData(item);
      });
  }, []);

  return (
    <main>
      <StarWarsContext.Provider value={ { data, setData } }>
        {children}
      </StarWarsContext.Provider>
    </main>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default StarWarsProvider;
