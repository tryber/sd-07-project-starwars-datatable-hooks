import React from 'react';
import SWContext from './Context';

export default function StarWarsContext() {
  const contextParser = {
    test: 'test',
  };
  return (
    <SWContext.Provider value={ contextParser }>{children}</SWContext.Provider>
  );
}
