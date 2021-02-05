import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './index';

function Provider({ children }) {
  const [initial, setInitial] = useState('');
  const value = {
    initial,
    setInitial,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      {children}
    </StarWarsContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element,
};
Provider.defaultProps = {
  children: PropTypes.element,
};
