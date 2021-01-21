import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const StarWarsContext = createContext();

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function Api() {
      const endpoint = await fetch('https://swapi-trybe.herokuapp.com/api/planets/?format=json');
      const response = await endpoint.json();
      setData(response.results);
    }
    Api();
  }, []);

  const dataCosumer = {
    data,
  };

  return (
    <StarWarsContext.Provider value={ dataCosumer }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
