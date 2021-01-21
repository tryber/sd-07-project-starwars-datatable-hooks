import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarWarsContext = createContext();

function StarWarsProvider({ children }) {
  const [data, setData] = useState({});

  return (
    <StarWarsContext.Provider value={ { data, setData } }>
      { children }
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = { children: PropTypes.node.isRequired };

export { StarWarsContext, StarWarsProvider };
