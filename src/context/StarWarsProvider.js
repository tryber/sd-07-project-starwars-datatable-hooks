import React from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import useGlobal from '../hooks/useGlobal';

const StarWarsProvider = ({ children }) => {
  const state = {
    globalState: useGlobal(),
  };

  return (
    <StarWarsContext.Provider value={ state }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
