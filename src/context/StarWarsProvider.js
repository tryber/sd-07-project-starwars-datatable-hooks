import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

  useEffect(() => {
    async function fetchData() {
      const { results } = await fetch(url).then((response) => response.json());
      setData(results);
    }
    fetchData();
  }, []);

  return (
    <StarWarsContext.Provider value={ { data } }>
      { children }
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
