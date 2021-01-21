import React from 'react';
import StarWarsContext from './StarWarsContext';

function Provider(props) {
  const { children } = props;
  return <StarWarsContext.Provider>{children}</StarWarsContext.Provider>;
}

export default Provider;
