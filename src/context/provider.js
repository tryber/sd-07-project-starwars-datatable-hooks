import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StrWrs from './index';

function Provider({ children }) {
  const [initial, setInitial] = useState('');
  const value = {
    initial,
    setInitial,
  };

  return (
    <StrWrs.Provider value={ value }>
      {children}
    </StrWrs.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.element,
};
Provider.defaultProps = {
  children: PropTypes.element,
};
